import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import pg from 'pg'

const { Pool } = pg
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 8080
const distDir = path.join(__dirname, 'dist')
const schemaPath = path.join(__dirname, 'docs', 'postgres-blog-schema.sql')
const commentLimiter = createRateLimiter({
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
  message: 'Too many comment submissions. Please try again later.',
})

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined,
    })
  : null

app.use(express.json({ limit: '1mb' }))
app.set('trust proxy', 1)
app.use(securityHeaders)

function securityHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://images.unsplash.com https://ithelp.ithome.com.tw https://hackmd.io https://i.imgur.com https://imgur.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  )
  return next()
}

function requireDatabase(req, res, next) {
  if (!pool) {
    return res.status(503).json({ error: 'DATABASE_URL is not configured.' })
  }
  return next()
}

function createRateLimiter({ maxRequests, windowMs, message }) {
  const buckets = new Map()

  return (req, res, next) => {
    const now = Date.now()
    const key = req.ip || req.socket.remoteAddress || 'unknown'
    const bucket = buckets.get(key)

    if (buckets.size > 10000) {
      for (const [bucketKey, value] of buckets.entries()) {
        if (value.resetAt <= now) buckets.delete(bucketKey)
      }
    }

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(key, { count: 1, resetAt: now + windowMs })
      return next()
    }

    bucket.count += 1

    if (bucket.count > maxRequests) {
      const retryAfterSeconds = Math.ceil((bucket.resetAt - now) / 1000)
      res.setHeader('Retry-After', retryAfterSeconds)
      return res.status(429).json({ error: message })
    }

    return next()
  }
}

function normalizeCommentText(value, maxLength) {
  return String(value ?? '')
    .trim()
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/</g, '＜')
    .replace(/>/g, '＞')
    .slice(0, maxLength)
}

function safeCommentText(value, maxLength) {
  return normalizeCommentText(value, maxLength)
}

function isValidSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

function requireValidSlug(req, res, next) {
  if (!isValidSlug(req.params.slug)) {
    return res.status(400).json({ error: 'Invalid post slug.' })
  }

  return next()
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function mapPost(row) {
  return {
    slug: row.slug,
    title: row.title,
    date: row.published_at ? row.published_at.toISOString().slice(0, 10) : row.created_at.toISOString().slice(0, 10),
    category: row.category_name,
    categorySlug: row.category_slug,
    readTime: '5 min read',
    excerpt: row.excerpt,
    coverImage: row.cover_image_url,
    contentMarkdown: row.content_markdown,
    commentCount: Number(row.comment_count ?? 0),
  }
}

async function initializeDatabaseSchema() {
  if (!pool) return

  const schemaSql = fs.readFileSync(schemaPath, 'utf8')
  await pool.query(schemaSql)
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, database: Boolean(pool) })
})

app.get(/^\/blog\/admin(?:\/.*)?$/, (req, res) => {
  return res.status(410).send('Blog admin is disabled. Add posts locally or through the database instead.')
})

app.get('/api/blog/posts', requireDatabase, async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT p.slug, p.title, p.excerpt, p.content_markdown, p.cover_image_url,
             p.published_at, p.created_at, c.name AS category_name, c.slug AS category_slug,
             COUNT(cm.id) FILTER (WHERE cm.status = 'approved') AS comment_count
      FROM blog.posts p
      JOIN blog.categories c ON c.id = p.category_id
      LEFT JOIN blog.comments cm ON cm.post_id = p.id
      WHERE p.status = 'published'
      GROUP BY p.id, c.id
      ORDER BY p.published_at DESC NULLS LAST, p.created_at DESC
    `)

    res.json({ posts: result.rows.map(mapPost) })
  } catch (error) {
    next(error)
  }
})

app.get('/api/blog/posts/:slug', requireValidSlug, requireDatabase, async (req, res, next) => {
  try {
    const result = await pool.query(
      `
        SELECT p.slug, p.title, p.excerpt, p.content_markdown, p.cover_image_url,
               p.published_at, p.created_at, c.name AS category_name, c.slug AS category_slug,
               COUNT(cm.id) FILTER (WHERE cm.status = 'approved') AS comment_count
        FROM blog.posts p
        JOIN blog.categories c ON c.id = p.category_id
        LEFT JOIN blog.comments cm ON cm.post_id = p.id
        WHERE p.slug = $1 AND p.status = 'published'
        GROUP BY p.id, c.id
      `,
      [req.params.slug]
    )

    if (!result.rowCount) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    return res.json({ post: mapPost(result.rows[0]) })
  } catch (error) {
    next(error)
  }
})

app.post('/api/blog/posts', (req, res) => {
  return res.status(410).json({ error: 'Online blog publishing is disabled.' })
})

app.get('/api/blog/posts/:slug/comments', requireValidSlug, requireDatabase, async (req, res, next) => {
  try {
    const result = await pool.query(
      `
        SELECT cm.id, cm.author_name, cm.body, cm.created_at
        FROM blog.comments cm
        JOIN blog.posts p ON p.id = cm.post_id
        WHERE p.slug = $1 AND cm.status = 'approved'
        ORDER BY cm.created_at DESC
      `,
      [req.params.slug]
    )

    res.json({
      comments: result.rows.map((row) => ({
        id: row.id,
        author: safeCommentText(row.author_name, 80),
        body: safeCommentText(row.body, 2000),
        date: row.created_at.toISOString().slice(0, 10),
      })),
    })
  } catch (error) {
    next(error)
  }
})

app.post('/api/blog/posts/:slug/comments', requireValidSlug, commentLimiter, requireDatabase, async (req, res, next) => {
  try {
    const author = normalizeCommentText(req.body.author, 80)
    const email = req.body.email?.trim()
    const body = normalizeCommentText(req.body.body, 2000)

    if (!body) {
      return res.status(400).json({ error: 'Comment body is required.' })
    }

    if (String(req.body.body ?? '').trim().length > 2000) {
      return res.status(400).json({ error: 'Comment body must be 2000 characters or fewer.' })
    }

    if (String(req.body.author ?? '').trim().length > 80) {
      return res.status(400).json({ error: 'Author name must be 80 characters or fewer.' })
    }

    if (email && email.length > 254) {
      return res.status(400).json({ error: 'Email must be 254 characters or fewer.' })
    }

    if (email && !isValidEmail(email)) {
      return res.status(400).json({ error: 'Email format is invalid.' })
    }

    const result = await pool.query(
      `
        INSERT INTO blog.comments (post_id, author_name, author_email, body, status, user_agent)
        SELECT id, $2, $3, $4, 'pending', $5
        FROM blog.posts
        WHERE slug = $1
        RETURNING id, author_name, body, created_at, status
      `,
      [req.params.slug, author || '匿名訪客', email || null, body, req.header('user-agent') ?? null]
    )

    if (!result.rowCount) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    return res.status(201).json({
      comment: {
        id: result.rows[0].id,
        author: safeCommentText(result.rows[0].author_name, 80),
        body: safeCommentText(result.rows[0].body, 2000),
        date: result.rows[0].created_at.toISOString().slice(0, 10),
        status: result.rows[0].status,
      },
    })
  } catch (error) {
    next(error)
  }
})

app.use(express.static(distDir))

app.use((req, res, next) => {
  if (req.method !== 'GET' || !req.accepts('html')) {
    return next()
  }

  const indexPath = path.join(distDir, 'index.html')

  if (!fs.existsSync(indexPath)) {
    return res.status(404).send('Build output not found. Run npm run build first.')
  }

  return res.sendFile(indexPath)
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ error: 'Internal server error.' })
})

async function startServer() {
  if (pool) {
    try {
      await initializeDatabaseSchema()
      console.log('Blog database schema is ready.')
    } catch (error) {
      console.error('Failed to initialize blog database schema.')
      console.error(error)
    }
  }

  app.listen(port, () => {
    console.log(`Blog server listening on port ${port}`)
  })
}

startServer()
