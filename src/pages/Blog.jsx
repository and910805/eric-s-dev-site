import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3, Database, FolderOpen, Tag } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { blogCategories, blogPosts, databaseProfile } from '../data/blog.js'
import { fetchBlogPosts } from '../lib/blogApi.js'

export default function Blog() {
  const [posts, setPosts] = useState(blogPosts)

  useEffect(() => {
    fetchBlogPosts()
      .then((apiPosts) => {
        if (apiPosts.length) setPosts(apiPosts)
      })
      .catch(() => {})
  }, [])

  const featuredPost = posts[0]
  const secondaryPosts = posts.slice(1)

  return (
    <section className="space-y-12">
      <SectionContainer subtitle="Blog" title="資安筆記與資料庫紀錄">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            `/blog` 是獨立於原本文章連結清單的新部落格分類。文章內容會以 Markdown 儲存，留言則預留給 PostgreSQL 的 `blog.comments`。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <article className="overflow-hidden rounded-2xl border border-[#39ff1424] bg-[#041018f2] shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
            <img src={featuredPost.coverImage} alt="" className="h-64 w-full object-cover sm:h-80" />

            <div className="space-y-5 p-6 sm:p-8">
              <div className="flex flex-wrap gap-3 text-xs text-zinc-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1">
                  <CalendarDays className="h-4 w-4 text-[#39ff14]" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3df2ff24] bg-[#3df2ff0d] px-3 py-1">
                  <FolderOpen className="h-4 w-4 text-[#8af7fe]" />
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                  <Clock3 className="h-4 w-4 text-zinc-300" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h1 className="section-title">{featuredPost.title}</h1>
              <p className="text-base leading-8 text-zinc-300 sm:text-lg">{featuredPost.excerpt}</p>

              <Link to={`/blog/${featuredPost.slug}`} className="terminal-button terminal-button--primary w-fit">
                read post
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {secondaryPosts.map((post) => (
              <article key={post.slug} className="glass-card">
                <div className="glass-card__inner">
                  <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">
                    {post.category}
                  </p>
                  <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                  <p className="text-sm leading-7 text-zinc-300">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="terminal-button terminal-button--ghost mt-auto w-fit">
                    open article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <h2 className="text-xl font-semibold text-white">分類</h2>
              <ul className="space-y-3">
                {blogCategories.map((category) => (
                  <li
                    key={category.slug}
                    className="flex items-center justify-between rounded-lg border border-[#39ff1424] bg-[#39ff1408] px-4 py-3"
                  >
                    <span className="inline-flex items-center gap-2 text-sm text-zinc-200">
                      <Tag className="h-4 w-4 text-[#39ff14]" />
                      {category.name}
                    </span>
                    <span className="mono text-xs text-zinc-400">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <section className="glass-card">
        <div className="glass-card__inner">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-[#8af7fe]">
                <Database className="h-4 w-4" />
                <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">database profile</span>
              </div>
              <h2 className="text-2xl font-semibold text-white">獨立 Blog Schema</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
                PostgreSQL 連線資訊請只放在部署環境變數。前端頁面只展示非敏感設定與 schema 規劃，不輸出密碼或完整 connection string。
              </p>
            </div>
            <div className="rounded-lg border border-[#39ff1424] bg-[#39ff1408] px-4 py-3 text-sm text-[#d7ffd8]">
              {databaseProfile.envName}
            </div>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(databaseProfile)
              .filter(([key]) => key !== 'envName')
              .map(([key, value]) => (
                <div key={key} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <dt className="mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">{key}</dt>
                  <dd className="mt-2 break-words text-sm text-zinc-100">{value}</dd>
                </div>
              ))}
          </dl>
        </div>
      </section>
    </section>
  )
}
