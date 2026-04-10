import cehV13Notes from '../../doc/CEH v13 筆記（持續更新中）.md?raw'
import cehV13Review from '../../doc/CEH V13 證照心得與準備方式分享.md?raw'
import cehpReview from '../../doc/CEHP心得.md?raw'
import forensicsClass from '../../doc/Forensics社課3_24.md?raw'
import picoCtfNotes from '../../doc/picoCTF.md?raw'

function stripFrontmatter(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, '').trim()
}

export const blogCategories = [
  { slug: 'certification-review', name: '證照心得', count: 2 },
  { slug: 'certification-notes', name: '證照筆記', count: 1 },
  { slug: 'ctf-notes', name: 'CTF 筆記', count: 1 },
  { slug: 'forensics', name: 'Forensics', count: 1 },
  { slug: 'database-lab', name: 'Database Lab', count: 1 },
  { slug: 'security-notes', name: 'Security Notes', count: 1 },
  { slug: 'build-log', name: 'Build Log', count: 1 },
]

export const blogPosts = [
  {
    slug: 'cehp-review',
    title: 'CEHP 心得',
    date: '2026-03-20',
    category: '證照心得',
    categorySlug: 'certification-review',
    readTime: '12 min read',
    excerpt: 'CEH Practical 考後心得，整理考試規則、環境、解題節奏與實作準備方式。',
    coverImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehpReview),
  },
  {
    slug: 'ceh-v13-review',
    title: 'CEH V13 證照心得與準備方式分享',
    date: '2025-07-20',
    category: '證照心得',
    categorySlug: 'certification-review',
    readTime: '10 min read',
    excerpt: 'CEH V13 考試心得與準備流程，包含考前提醒、考試經驗與複習方向。',
    coverImage:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehV13Review),
  },
  {
    slug: 'ceh-v13-notes',
    title: 'CEH v13 筆記（持續更新中）',
    date: '2025-07-01',
    category: '證照筆記',
    categorySlug: 'certification-notes',
    readTime: '20 min read',
    excerpt: 'CEH v13 重點筆記，整理常見觀念、攻防主題與考試複習內容。',
    coverImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehV13Notes),
  },
  {
    slug: 'picoctf-notes',
    title: 'picoCTF 筆記',
    date: '2025-06-20',
    category: 'CTF 筆記',
    categorySlug: 'ctf-notes',
    readTime: '18 min read',
    excerpt: 'picoCTF 解題筆記，包含 Web Exploitation 等題型的觀察與解題流程。',
    coverImage:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(picoCtfNotes),
  },
  {
    slug: 'forensics-class-0324',
    title: 'Forensics 社課 3/24',
    date: '2025-03-24',
    category: 'Forensics',
    categorySlug: 'forensics',
    readTime: '8 min read',
    excerpt: 'Forensics 社課教材與筆記，整理鑑識題型與實作觀察。',
    coverImage:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(forensicsClass),
  },
  {
    slug: 'zeabur-postgresql-blog-foundation',
    title: 'Zeabur PostgreSQL Blog Foundation',
    date: '2026-04-10',
    category: 'Database Lab',
    categorySlug: 'database-lab',
    readTime: '5 min read',
    excerpt:
      '把部落格內容獨立成一個資料庫 schema，讓文章、分類、標籤、留言與發佈狀態可以和作品集靜態資料分開管理。',
    coverImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 目標

這個分頁用來承接長文、學習筆記、證照心得與資料庫紀錄，不再混在原本的文章連結清單裡。

內容結構參考傳統部落格文章頁：

- 文章標題與發佈日期
- 分類、閱讀時間與摘要
- Markdown 主文
- 近期文章與分類側邊欄
- 文章底部留言區

## 資料切分方式

前端先用獨立的 \`blogPosts\` data module 呈現，後續要接 API 時可以直接對應 PostgreSQL 的 \`blog\` schema。

資料庫端建議使用獨立 schema，表格包含：

| table | purpose |
| --- | --- |
| \`blog.categories\` | 文章分類 |
| \`blog.posts\` | Markdown 文章本文 |
| \`blog.tags\` | 標籤 |
| \`blog.post_tags\` | 文章與標籤關聯 |
| \`blog.comments\` | 留言 |

## 後台寫作流程

後台文章內容使用 Markdown 儲存在 \`content_markdown\` 欄位。前端文章頁只負責渲染 Markdown，不直接連 PostgreSQL。

\`\`\`markdown
## 範例標題

- 支援清單
- 支援表格
- 支援程式碼區塊
\`\`\`

## 安全注意

PostgreSQL 密碼不應該放進 React 前端或 Git repository，部署時只放在 Zeabur 的環境變數。

如果資料庫連線資訊曾經貼到對話或文件，正式上線前建議旋轉密碼，並確認應用程式只使用最小權限帳號。`,
  },
  {
    slug: 'security-writing-index',
    title: 'Security Writing Index',
    date: '2026-04-08',
    category: 'Security Notes',
    categorySlug: 'security-notes',
    readTime: '3 min read',
    excerpt: '把資安筆記整理成可搜尋、可分類、可延伸的內容索引，降低日後重複整理成本。',
    coverImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 索引策略

以主題分類文章，例如證照心得、CTF 解題、工具使用、弱點管理與自動化流程。

每篇文章保留摘要、標籤與發佈狀態，方便後續做列表、搜尋與精選文章區塊。

## 建議分類

- 證照心得
- CTF 筆記
- 弱點管理
- 工具使用
- 自動化流程`,
  },
  {
    slug: 'portfolio-content-architecture',
    title: 'Portfolio Content Architecture',
    date: '2026-04-01',
    category: 'Build Log',
    categorySlug: 'build-log',
    readTime: '4 min read',
    excerpt: '記錄作品集從靜態資料走向可維護內容系統的規劃方式。',
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 內容邊界

首頁維持資安履歷定位，專案與證照維持原本展示用途，部落格則獨立承接長文。

資料來源拆開之後，未來可以逐步把 \`blogPosts\` 換成 API response，而不用重寫整個 UI。

## 下一步

- 建立後端 API
- 將 Markdown 寫入 PostgreSQL
- 將留言送進 \`blog.comments\`
- 對後台加上登入保護`,
  },
]

export const blogComments = {
  'zeabur-postgresql-blog-foundation': [
    {
      id: 1,
      author: 'Eric',
      date: '2026-04-10',
      body: '這裡先保留留言樣式，接 API 後可以直接改成從 blog.comments 讀取。',
    },
  ],
}

export const defaultDraftMarkdown = `## 新文章標題

這裡可以直接使用 Markdown 撰寫後台文章內容。

### 支援內容

- 標題
- 清單
- 表格
- 程式碼區塊

| 欄位 | 說明 |
| --- | --- |
| title | 文章標題 |
| slug | 文章網址 |
| content_markdown | Markdown 本文 |

\`\`\`sql
SELECT title, status, published_at
FROM blog.posts
WHERE status = 'published'
ORDER BY published_at DESC;
\`\`\`
`

export const databaseProfile = {
  provider: 'Zeabur PostgreSQL',
  host: 'tpe1.clusters.zeabur.com',
  port: '22575',
  database: 'zeabur',
  username: 'root',
  schema: 'blog',
  envName: 'DATABASE_URL',
  migrationFile: 'docs/postgres-blog-schema.sql',
}
