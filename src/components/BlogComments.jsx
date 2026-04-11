import React, { useEffect, useMemo, useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { blogComments } from '../data/blog.js'
import { createBlogComment, fetchBlogComments } from '../lib/blogApi.js'

export default function BlogComments({ postSlug }) {
  const initialComments = useMemo(() => blogComments[postSlug] ?? [], [postSlug])
  const [comments, setComments] = useState(initialComments)
  const [form, setForm] = useState({ author: '', email: '', body: '' })
  const [notice, setNotice] = useState('')

  useEffect(() => {
    setComments(initialComments)
    fetchBlogComments(postSlug)
      .then(setComments)
      .catch(() => {})
  }, [initialComments, postSlug])

  async function handleSubmit(event) {
    event.preventDefault()

    const body = form.body.trim()

    if (!body) return

    try {
      const savedComment = await createBlogComment(postSlug, { ...form, body })
      setComments((current) => [savedComment, ...current])
      setNotice('留言已直接發布。')
    } catch (error) {
      const localComment = {
        id: Date.now(),
        author: form.author.trim() || '匿名訪客',
        date: new Date().toISOString().slice(0, 10),
        body,
      }
      setComments((current) => [localComment, ...current])
      setNotice('目前 API 無法連線，留言先在本機預覽。')
    } finally {
      setForm({ author: '', email: '', body: '' })
    }
  }

  return (
    <section className="glass-card">
      <div className="glass-card__inner">
        <div className="flex items-center gap-2 text-[#8af7fe]">
          <MessageCircle className="h-4 w-4" />
          <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">comments</span>
        </div>

        <h2 className="text-2xl font-semibold text-white">發佈留言</h2>
        <p className="text-sm leading-7 text-zinc-400">
          送出後會直接發布到這篇文章底下，不需要再另外審核。
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-zinc-300">
              顯示名稱
              <input
                value={form.author}
                onChange={(event) => setForm((current) => ({ ...current, author: event.target.value }))}
                maxLength={80}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                placeholder="Enter your name"
              />
            </label>

            <label className="grid gap-2 text-sm text-zinc-300">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                maxLength={254}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
                placeholder="name@example.com"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-zinc-300">
            Comment
            <textarea
              value={form.body}
              onChange={(event) => setForm((current) => ({ ...current, body: event.target.value }))}
              maxLength={2000}
              className="min-h-32 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]"
              placeholder="留下你的想法"
            />
          </label>

          <button type="submit" className="terminal-button terminal-button--primary w-fit">
            submit comment
            <Send className="h-4 w-4" />
          </button>

          {notice && <p className="text-sm text-[#b8ffb8]">{notice}</p>}
        </form>

        <div className="space-y-3">
          {comments.map((comment) => (
            <article key={comment.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-white">{comment.author}</h3>
                <time className="mono text-xs text-zinc-500">{comment.date}</time>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{comment.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
