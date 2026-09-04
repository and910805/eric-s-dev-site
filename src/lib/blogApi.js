/**
 * 部落格資料的靜態版本。
 *
 * 原本這裡打 Express + PostgreSQL 的 /api/blog/*。2026-09 靜態化：
 * 98 篇文章連同標題、分類、日期、摘要、封面，一次從線上 API 匯出到
 * src/data/blog-posts/<slug>.json，清單在 src/data/blog-index.json。
 * 函式簽名維持不變，所以 Blog.jsx / BlogPost.jsx / Home.jsx 不用改。
 *
 * 全文用動態 import 逐篇載入（Vite 會切成獨立 chunk），首屏只帶清單，
 * 不會把 38 萬字的 Markdown 塞進主 bundle。
 *
 * 留言功能已移除：資料庫裡 98 篇文章的留言總數是 0，
 * 而它是整個後端存在的唯一理由。
 */
import blogIndex from '../data/blog-index.json'

// 舊 API 固定回這個值，UI 有顯示，照舊補上
const READ_TIME = '5 min read'

const postModules = import.meta.glob('../data/blog-posts/*.json')

function withDefaults(post) {
  return { ...post, readTime: READ_TIME, commentCount: 0 }
}

export async function fetchBlogPosts() {
  return blogIndex.map(withDefaults)
}

export async function fetchBlogPost(slug) {
  const loader = postModules[`../data/blog-posts/${slug}.json`]
  if (!loader) throw new Error('Blog post unavailable')
  const mod = await loader()
  return withDefaults(mod.default ?? mod)
}
