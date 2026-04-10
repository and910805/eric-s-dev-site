import React, { useMemo, useState } from 'react'
import { Eye, FilePenLine, Save } from 'lucide-react'
import MarkdownContent from '../components/MarkdownContent.jsx'
import { defaultDraftMarkdown } from '../data/blog.js'
import { createBlogPost } from '../lib/blogApi.js'

export default function BlogAdmin() {
  const [draft, setDraft] = useState(defaultDraftMarkdown)
  const [title, setTitle] = useState('新文章標題')
  const [slug, setSlug] = useState('new-blog-post')
  const [excerpt, setExcerpt] = useState('這是一篇使用 Markdown 後台撰寫的新文章。')
  const [categorySlug, setCategorySlug] = useState('build-log')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('draft')
  const [notice, setNotice] = useState('')
  const canSave = useMemo(() => title && slug && excerpt && draft && categorySlug && username && password, [
    categorySlug,
    draft,
    excerpt,
    password,
    slug,
    title,
    username,
  ])

  async function handleSave() {
    setNotice('')

    try {
      await createBlogPost(
        {
          title,
          slug,
          excerpt,
          categorySlug,
          status,
          contentMarkdown: draft,
        },
        { username, password }
      )
      setNotice('文章已送到 API 儲存。')
    } catch (error) {
      setNotice(error.message)
    }
  }

  return (
    <section className="space-y-8">
      <header className="max-w-4xl space-y-4">
        <div className="terminal-label">
          <span className="terminal-dot" />
          blog admin / markdown
        </div>
        <h1 className="section-title">Markdown 文章後台</h1>
        <p className="text-base leading-8 text-zinc-300">
          這個頁面提供 Markdown 編輯、即時預覽與後台儲存。部署後請用環境變數設定管理員帳密，避免後台開放給訪客。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="glass-card">
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#8af7fe]">
              <FilePenLine className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">editor</span>
            </div>
            <div className="grid gap-3">
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                placeholder="文章標題"
              />
              <input
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                placeholder="slug"
              />
              <textarea
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                className="min-h-24 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                placeholder="摘要"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  value={categorySlug}
                  onChange={(event) => setCategorySlug(event.target.value)}
                  className="rounded-lg border border-white/10 bg-[#02070d] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                >
                  <option value="database-lab">Database Lab</option>
                  <option value="security-notes">Security Notes</option>
                  <option value="build-log">Build Log</option>
                </select>
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="rounded-lg border border-white/10 bg-[#02070d] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                >
                  <option value="draft">draft</option>
                  <option value="published">published</option>
                </select>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                  placeholder="admin username"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                  placeholder="admin password"
                />
              </div>
            </div>
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              className="min-h-[520px] rounded-lg border border-white/10 bg-[#02070d] p-4 font-mono text-sm leading-7 text-zinc-100 outline-none focus:border-[#39ff14]"
              spellCheck="false"
            />
            <button
              type="button"
              className="terminal-button terminal-button--primary w-fit disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!canSave}
              onClick={handleSave}
            >
              save markdown
              <Save className="h-4 w-4" />
            </button>
            {notice && <p className="text-sm text-[#b8ffb8]">{notice}</p>}
          </div>
        </section>

        <section className="glass-card">
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#8af7fe]">
              <Eye className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">preview</span>
            </div>
            <div className="markdown-body rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <MarkdownContent>{draft}</MarkdownContent>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
