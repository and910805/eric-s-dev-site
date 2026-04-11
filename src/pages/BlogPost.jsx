import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock3, FolderOpen, Tag, TerminalSquare } from 'lucide-react'
import BlogComments from '../components/BlogComments.jsx'
import MarkdownContent from '../components/MarkdownContent.jsx'
import { blogCategories, blogPosts } from '../data/blog.js'
import { fetchBlogPost } from '../lib/blogApi.js'

export default function BlogPost() {
  const { slug } = useParams()
  const fallbackPost = blogPosts.find((item) => item.slug === slug)
  const [post, setPost] = useState(() => fallbackPost ?? null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setNotFound(false)
    setPost(fallbackPost ?? null)
    fetchBlogPost(slug)
      .then(setPost)
      .catch(() => {
        if (!fallbackPost) setNotFound(true)
      })
  }, [fallbackPost, slug])

  if (notFound) {
    return <Navigate to="/blog" replace />
  }

  if (!post) {
    return <div className="glass-card">Loading article...</div>
  }

  const relatedPosts = [
    ...blogPosts.filter((item) => item.slug !== post.slug && item.categorySlug === post.categorySlug),
    ...blogPosts.filter((item) => item.slug !== post.slug && item.categorySlug !== post.categorySlug),
  ].slice(0, 3)

  return (
    <section className="space-y-8">
      <Link to="/blog" className="terminal-button terminal-button--ghost w-fit">
        <ArrowLeft className="h-4 w-4" />
        back to blog
      </Link>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#041018f2] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <div className="blog-hero">
            <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
            <div className="blog-hero__overlay" />
            <div className="blog-hero__content">
              <div className="flex flex-wrap gap-3 text-xs text-zinc-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f4d58d33] bg-[#f4d58d1a] px-3 py-1.5 text-[#fff1c7]">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#8af7fe33] bg-[#8af7fe14] px-3 py-1.5 text-[#d8fbff]">
                  <FolderOpen className="h-4 w-4" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-zinc-100">
                  <Clock3 className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="space-y-4">
                <p className="mono text-xs uppercase tracking-[0.28em] text-[#8af7fe]">Personal archive / yearly log</p>
                <h1 className="blog-hero__title">{post.title}</h1>
                <p className="max-w-3xl text-base leading-8 text-zinc-100/88 sm:text-lg">{post.excerpt}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="blog-hero__stat">
                  <span className="blog-hero__stat-label">Category</span>
                  <span className="blog-hero__stat-value">{post.category}</span>
                </div>
                <div className="blog-hero__stat">
                  <span className="blog-hero__stat-label">Published</span>
                  <span className="blog-hero__stat-value">{post.date}</span>
                </div>
                <div className="blog-hero__stat">
                  <span className="blog-hero__stat-label">Reading time</span>
                  <span className="blog-hero__stat-value">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8 lg:p-10">
            <div className="blog-terminal-note">
              <TerminalSquare className="h-4 w-4 text-[#39ff14]" />
              <span className="mono text-xs text-zinc-400">logbook://reflection/{post.slug}</span>
            </div>

            <div className="markdown-body markdown-body--feature">
              <MarkdownContent>{post.contentMarkdown}</MarkdownContent>
            </div>
          </div>
        </article>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <h2 className="text-xl font-semibold text-white">近期文章</h2>
              <div className="space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#39ff1450] hover:bg-[#39ff1408]"
                  >
                    <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-[#8af7fe]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

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

      <BlogComments postSlug={post.slug} />
    </section>
  )
}
