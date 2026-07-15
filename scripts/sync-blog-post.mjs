import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import pg from 'pg'

const { Client } = pg
const [
  slug,
  markdownPath,
  coverImageArgument = '',
  title = '',
  excerpt = '',
  publishedDate = '',
  categorySlug = '',
  categoryName = '',
] = process.argv.slice(2)
const shouldUpsert = Boolean(title)
const coverImageUrl = coverImageArgument === '-' ? '' : coverImageArgument

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '')) {
  throw new Error('A valid lowercase blog slug is required.')
}

const workspaceRoot = process.cwd()
const docRoot = path.resolve(workspaceRoot, 'doc')
const resolvedMarkdownPath = path.resolve(workspaceRoot, markdownPath ?? '')

if (!resolvedMarkdownPath.startsWith(`${docRoot}${path.sep}`)) {
  throw new Error('The Markdown file must be inside the doc directory.')
}

if (!fs.statSync(resolvedMarkdownPath).isFile()) {
  throw new Error('The Markdown path must point to a file.')
}

if (coverImageUrl && !isSafeImageUrl(coverImageUrl)) {
  throw new Error('The cover image must use a root-relative or HTTPS URL.')
}

if (shouldUpsert) {
  if (!excerpt || !categoryName) {
    throw new Error('Title, excerpt, published date, category slug, and category name are required to publish a post.')
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedDate) || Number.isNaN(Date.parse(`${publishedDate}T00:00:00Z`))) {
    throw new Error('The published date must use a valid YYYY-MM-DD format.')
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(categorySlug)) {
    throw new Error('A valid lowercase category slug is required.')
  }
}

const databaseUrl = process.env.DATABASE_URL || readEnvValue('DATABASE_URL')

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not configured.')
}

const markdown = fs.readFileSync(resolvedMarkdownPath, 'utf8')
const client = new Client({
  connectionString: databaseUrl,
  ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined,
})

try {
  await client.connect()
  const result = shouldUpsert
    ? await upsertPost(client)
    : await updatePost(client)

  const post = result.rows[0]
  console.log(`Synced ${post.slug} (${post.content_length} characters).`)
} finally {
  await client.end()
}

async function updatePost(databaseClient) {
  const result = await databaseClient.query(
    `
      UPDATE blog.posts
      SET content_markdown = $1,
          cover_image_url = $2,
          updated_at = NOW()
      WHERE slug = $3
      RETURNING slug, cover_image_url, length(content_markdown) AS content_length
    `,
    [markdown, coverImageUrl || null, slug]
  )

  if (result.rowCount !== 1) {
    throw new Error(`Expected one post for slug "${slug}", found ${result.rowCount}.`)
  }

  return result
}

async function upsertPost(databaseClient) {
  await databaseClient.query('BEGIN')

  try {
    const categoryResult = await databaseClient.query(
      `
        INSERT INTO blog.categories (slug, name)
        VALUES ($1, $2)
        ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      `,
      [categorySlug, categoryName]
    )
    const result = await databaseClient.query(
      `
        INSERT INTO blog.posts (
          category_id, slug, title, excerpt, content_markdown,
          cover_image_url, status, published_at
        )
        VALUES ($1, $2, $3, $4, $5, $6, 'published', ($7::date + TIME '12:00:00') AT TIME ZONE 'UTC')
        ON CONFLICT (slug) DO UPDATE SET
          category_id = EXCLUDED.category_id,
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          content_markdown = EXCLUDED.content_markdown,
          cover_image_url = EXCLUDED.cover_image_url,
          status = 'published',
          published_at = EXCLUDED.published_at,
          updated_at = NOW()
        RETURNING slug, cover_image_url, length(content_markdown) AS content_length
      `,
      [
        categoryResult.rows[0].id,
        slug,
        title,
        excerpt,
        markdown,
        coverImageUrl || null,
        publishedDate,
      ]
    )

    await databaseClient.query('COMMIT')
    return result
  } catch (error) {
    await databaseClient.query('ROLLBACK')
    throw error
  }
}

function isSafeImageUrl(value) {
  if (value.startsWith('/') && !value.startsWith('//')) return true

  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

function readEnvValue(name) {
  const envPath = path.resolve(workspaceRoot, '.env')
  if (!fs.existsSync(envPath)) return ''

  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1 || trimmed.slice(0, separatorIndex).trim() !== name) continue

    return trimmed.slice(separatorIndex + 1).trim().replace(/^(['"])(.*)\1$/, '$2')
  }

  return ''
}
