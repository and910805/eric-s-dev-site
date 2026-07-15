import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import pg from 'pg'

const { Client } = pg
const [slug, markdownPath, coverImageUrl = ''] = process.argv.slice(2)

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
  const result = await client.query(
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

  const post = result.rows[0]
  console.log(`Synced ${post.slug} (${post.content_length} characters).`)
} finally {
  await client.end()
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
