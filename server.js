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
const adminToken = process.env.BLOG_ADMIN_TOKEN
const adminUsername = process.env.BLOG_ADMIN_USERNAME
const adminPassword = process.env.BLOG_ADMIN_PASSWORD

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined,
    })
  : null

app.use(express.json({ limit: '1mb' }))

function requireDatabase(req, res, next) {
  if (!pool) {
    return res.status(503).json({ error: 'DATABASE_URL is not configured.' })
  }
  return next()
}

function requireAdmin(req, res, next) {
  const basicCredentials = parseBasicAuth(req.header('authorization'))
  const token = req.header('authorization')?.replace(/^Bearer\s+/i, '')

  if (adminUsername && adminPassword) {
    if (basicCredentials?.username === adminUsername && basicCredentials?.password === adminPassword) {
      return next()
    }

    res.setHeader('WWW-Authenticate', 'Basic realm="Blog Admin"')
    return res.status(401).json({ error: 'Invalid admin credentials.' })
  }

  if (adminToken) {
    if (token === adminToken) {
      return next()
    }

    return res.status(401).json({ error: 'Invalid admin token.' })
  }

  return res.status(403).json({ error: 'Blog admin credentials are not configured.' })
}

function parseBasicAuth(header) {
  if (!header?.startsWith('Basic ')) return null

  try {
    const decoded = Buffer.from(header.slice('Basic '.length), 'base64').toString('utf8')
    const separatorIndex = decoded.indexOf(':')

    if (separatorIndex === -1) return null

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    }
  } catch (error) {
    return null
  }
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

app.get('/api/health', (req, res) => {
  res.json({ ok: true, database: Boolean(pool) })
})

app.get(/^\/blog\/admin(?:\/.*)?$/, requireAdmin, (req, res) => {
  const indexPath = path.join(distDir, 'index.html')

  if (!fs.existsSync(indexPath)) {
    return res.status(404).send('Build output not found. Run npm run build first.')
  }

  return res.sendFile(indexPath)
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

app.get('/api/blog/posts/:slug', requireDatabase, async (req, res, next) => {
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

app.post('/api/blog/posts', requireDatabase, requireAdmin, async (req, res, next) => {
  try {
    const { title, slug, excerpt, contentMarkdown, categorySlug, coverImage, status = 'draft' } = req.body

    if (!title || !slug || !excerpt || !contentMarkdown || !categorySlug) {
      return res.status(400).json({ error: 'title, slug, excerpt, contentMarkdown, and categorySlug are required.' })
    }

    const result = await pool.query(
      `
        WITH selected_category AS (SELECT id FROM blog.categories WHERE slug = $5)
        INSERT INTO blog.posts (title, slug, excerpt, content_markdown, category_id, cover_image_url, status, published_at)
        SELECT $1, $2, $3, $4, id, $6, $7, CASE WHEN $7 = 'published' THEN NOW() ELSE NULL END
        FROM selected_category
        RETURNING id, slug
      `,
      [title, slug, excerpt, contentMarkdown, categorySlug, coverImage ?? null, status]
    )

    if (!result.rowCount) {
      return res.status(400).json({ error: 'Category not found.' })
    }

    return res.status(201).json({ post: result.rows[0] })
  } catch (error) {
    next(error)
  }
})

app.get('/api/blog/posts/:slug/comments', requireDatabase, async (req, res, next) => {
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
        author: row.author_name,
        body: row.body,
        date: row.created_at.toISOString().slice(0, 10),
      })),
    })
  } catch (error) {
    next(error)
  }
})

app.post('/api/blog/posts/:slug/comments', requireDatabase, async (req, res, next) => {
  try {
    const { author, email, body } = req.body

    if (!body?.trim()) {
      return res.status(400).json({ error: 'Comment body is required.' })
    }

    const result = await pool.query(
      `
        INSERT INTO blog.comments (post_id, author_name, author_email, body, status, user_agent)
        SELECT id, $2, $3, $4, 'pending', $5
        FROM blog.posts
        WHERE slug = $1
        RETURNING id, author_name, body, created_at, status
      `,
      [req.params.slug, author?.trim() || '匿名訪客', email?.trim() || null, body.trim(), req.header('user-agent') ?? null]
    )

    if (!result.rowCount) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    return res.status(201).json({
      comment: {
        id: result.rows[0].id,
        author: result.rows[0].author_name,
        body: result.rows[0].body,
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

app.listen(port, () => {
  console.log(`Blog server listening on port ${port}`)
})
