/**
 * 部落格分類。名稱沿用原本 blog.js 的定義，**數量改由 blog-index.json 推導** ——
 * 原本是手寫的常數，跟實際文章數會隨時間對不上。
 *
 * Blog.jsx 會再濾掉 hiddenCategorySlugs（database-lab / security-notes / build-log），
 * 那三個分類只有當初搭站的骨架文，不出現在列表，但直接開網址仍可讀。
 */
import blogIndex from './blog-index.json'

const NAMES = {
  "certification-review": "證照心得",
  "certification-notes": "證照筆記",
  "ctf-notes": "CTF 筆記",
  "forensics": "Forensics",
  "self-review": "回顧自我",
  "ithome-2025-ironman": "2025 iThome 鐵人賽",
  "ithome-2026-ironman": "2026 iThome 鐵人賽",
  "weekly-vulnerability-radar": "每週漏洞雷達"
}

export const blogCategories = Object.entries(NAMES).map(([slug, name]) => ({
  slug,
  name,
  count: blogIndex.filter((post) => post.categorySlug === slug).length,
}))
