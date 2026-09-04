/**
 * 新增或更新一篇文章（靜態版）。
 *
 * 用法：
 *   node scripts/add-post.mjs <slug> <markdown 路徑> [封面圖或 -] [標題] [摘要] [YYYY-MM-DD] [分類 slug] [分類名稱]
 *
 * 只給 slug 與 markdown 路徑時，只更新既有文章的全文；
 * 全部參數都給時，新增或整筆覆寫（metadata 一起更新）。
 * 參數順序刻意跟舊的 sync-blog-post.mjs 一樣，好讓原本的習慣直接沿用。
 *
 * 產出：src/data/blog-posts/<slug>.json 與 src/data/blog-index.json 的對應項目。
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const [slug, markdownPath, coverArg = '', title = '', excerpt = '', date = '', categorySlug = '', category = ''] =
  process.argv.slice(2)

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
if (!SLUG_RE.test(slug ?? '')) fail('需要合法的小寫 slug（英數與連字號）。')
if (!markdownPath || !fs.existsSync(markdownPath)) fail('找不到 Markdown 檔案。')

const root = process.cwd()
const postsDir = path.join(root, 'src', 'data', 'blog-posts')
const indexPath = path.join(root, 'src', 'data', 'blog-index.json')
const postPath = path.join(postsDir, `${slug}.json`)

const contentMarkdown = fs.readFileSync(markdownPath, 'utf8')
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
const existing = fs.existsSync(postPath) ? JSON.parse(fs.readFileSync(postPath, 'utf8')) : null

let post
if (title) {
  if (!excerpt || !categorySlug || !category) fail('新增文章需要標題、摘要、日期、分類 slug 與分類名稱。')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) fail('日期格式須為 YYYY-MM-DD。')
  if (!SLUG_RE.test(categorySlug)) fail('分類 slug 須為小寫英數與連字號。')
  const coverImage = coverArg && coverArg !== '-' ? coverArg : null
  if (coverImage && !/^(\/|https:\/\/)/.test(coverImage)) fail('封面圖須為根相對路徑或 https 網址。')
  post = { slug, title, date, category, categorySlug, excerpt, coverImage, contentMarkdown }
} else {
  if (!existing) fail(`找不到既有文章 ${slug}，新增請提供完整 metadata。`)
  post = { ...existing, contentMarkdown }
}

fs.writeFileSync(postPath, JSON.stringify(post, null, 2) + '\n', 'utf8')

const { contentMarkdown: _omit, ...meta } = post
const i = index.findIndex((p) => p.slug === slug)
if (i >= 0) index[i] = meta
else index.unshift(meta)
index.sort((a, b) => b.date.localeCompare(a.date))
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')

console.log(`${i >= 0 ? '已更新' : '已新增'} ${slug}（${contentMarkdown.length.toLocaleString()} 字）`)

function fail(message) {
  console.error(message)
  process.exit(1)
}
