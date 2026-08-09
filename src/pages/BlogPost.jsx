import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Check, ChevronDown, Clock3, Copy, FolderOpen, List, TerminalSquare } from 'lucide-react'
import BlogComments from '../components/BlogComments.jsx'
import MarkdownContent from '../components/MarkdownContent.jsx'
import { blogPosts } from '../data/blog.js'
import { fetchBlogPost } from '../lib/blogApi.js'
import { extractMarkdownHeadings, stripLeadingMarkdownTitle } from '../lib/markdownHeadings.js'

const PUBLIC_SITE_ORIGIN = 'https://eric-s-dev-site.kuanlin.pro'

function prepareMarkdownForPublishing(markdown) {
  return String(markdown ?? '').replace(/\]\(\/(?!\/)/g, `](${PUBLIC_SITE_ORIGIN}/`)
}

function TocLinks({ headings, activeHeading }) {
  if (!headings.length) {
    return <p className="text-sm leading-6 text-zinc-500">這篇文章沒有額外章節。</p>
  }

  return (
    <ol className="article-toc__list">
      {headings.map((heading) => (
        <li key={heading.id} className={heading.level === 3 ? 'article-toc__subitem' : ''}>
          <a
            href={`#${heading.id}`}
            className={activeHeading === heading.id ? 'article-toc__link is-active' : 'article-toc__link'}
            aria-current={activeHeading === heading.id ? 'location' : undefined}
          >
            <span className="article-toc__marker" />
            <span>{heading.text}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}

function TableOfContents({ headings, activeHeading, collapsible = false }) {
  if (collapsible) {
    return (
      <details className="article-toc article-toc--mobile">
        <summary>
          <span className="inline-flex items-center gap-2">
            <List className="h-4 w-4 text-[#4ade80]" />
            本篇目錄
          </span>
          <ChevronDown className="article-toc__chevron h-4 w-4" />
        </summary>
        <nav aria-label="本篇文章目錄" className="mt-3">
          <TocLinks headings={headings} activeHeading={activeHeading} />
        </nav>
      </details>
    )
  }

  return (
    <nav aria-label="本篇文章目錄" className="article-toc">
      <div className="mb-3 flex items-center gap-2">
        <List className="h-4 w-4 text-[#4ade80]" />
        <h2 className="mono text-sm font-semibold text-white">本篇目錄</h2>
      </div>
      <TocLinks headings={headings} activeHeading={activeHeading} />
    </nav>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const fallbackPost = blogPosts.find((item) => item.slug === slug)
  const [post, setPost] = useState(() => fallbackPost ?? null)
  const [notFound, setNotFound] = useState(false)
  const [copyStatus, setCopyStatus] = useState('idle')
  const [activeHeading, setActiveHeading] = useState('')
  const copyResetTimerRef = useRef(null)
  const articleRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['start start', 'end end'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  const contentMarkdown = useMemo(() => stripLeadingMarkdownTitle(post?.contentMarkdown), [post?.contentMarkdown])
  const headings = useMemo(() => extractMarkdownHeadings(contentMarkdown), [contentMarkdown])

  useEffect(() => {
    setNotFound(false)
    setPost(fallbackPost ?? null)
    fetchBlogPost(slug)
      .then(setPost)
      .catch(() => {
        if (!fallbackPost) setNotFound(true)
      })
  }, [fallbackPost, slug])

  useEffect(() => {
    setCopyStatus('idle')
    setActiveHeading('')

    return () => {
      if (copyResetTimerRef.current) window.clearTimeout(copyResetTimerRef.current)
    }
  }, [slug])

  useEffect(() => {
    if (!headings.length || typeof IntersectionObserver === 'undefined') return undefined

    const elements = headings.map((heading) => document.getElementById(heading.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveHeading(visible.target.id)
      },
      { rootMargin: '-100px 0px -72% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [headings])

  if (notFound) {
    return <Navigate to="/blog" replace />
  }

  if (!post) {
    return (
      <div className="glass-card" role="status">
        正在載入文章…
      </div>
    )
  }

  const copyMarkdown = async () => {
    if (copyResetTimerRef.current) window.clearTimeout(copyResetTimerRef.current)

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API is unavailable.')

      await navigator.clipboard.writeText(prepareMarkdownForPublishing(post.contentMarkdown))
      setCopyStatus('copied')
    } catch (error) {
      setCopyStatus('error')
    }

    copyResetTimerRef.current = window.setTimeout(() => {
      setCopyStatus('idle')
      copyResetTimerRef.current = null
    }, 2400)
  }

  const copyLabel =
    copyStatus === 'copied' ? '已複製 Markdown' : copyStatus === 'error' ? '複製失敗' : '複製 Markdown'

  return (
    <section className="space-y-8">
      <motion.div
        className="reading-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
        aria-hidden="true"
      />

      <Link to="/blog" className="terminal-button terminal-button--ghost w-fit">
        <ArrowLeft className="h-4 w-4" />
        回到文章列表
      </Link>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article
          ref={articleRef}
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#041018f2] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        >
          <div className={`blog-hero ${post.coverImage ? '' : 'blog-hero--plain'}`}>
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.hidden = true
                }}
              />
            )}
            <div className="blog-hero__overlay" />
            <div className="blog-hero__content">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-200 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f4d58d33] bg-[#f4d58d1a] px-3 py-1.5 text-[#fff1c7]">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7dd3fc33] bg-[#7dd3fc14] px-3 py-1.5 text-[#d8fbff]">
                  <FolderOpen className="h-4 w-4" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-zinc-100">
                  <Clock3 className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="space-y-4">
                <p className="mono text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">Personal archive / yearly log</p>
                <h1 className="blog-hero__title">{post.title}</h1>
                <p className="max-w-3xl text-base leading-8 text-zinc-100/88 sm:text-lg">{post.excerpt}</p>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 p-4 lg:hidden sm:p-6">
            <TableOfContents headings={headings} activeHeading={activeHeading} collapsible />
          </div>

          <div className="space-y-8 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="blog-terminal-note">
                <TerminalSquare className="h-4 w-4 shrink-0 text-[#4ade80]" />
                <span className="mono break-all text-xs text-zinc-400">logbook://reflection/{post.slug}</span>
              </div>

              <button
                type="button"
                className={`terminal-button terminal-button--ghost w-full shrink-0 sm:w-auto ${
                  copyStatus === 'copied' ? 'border-[#4ade8066] bg-[#4ade8014] text-[#bbf7d0]' : ''
                }`}
                onClick={copyMarkdown}
                title="複製適合貼到 iThome 的 Markdown"
              >
                {copyStatus === 'copied' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span aria-live="polite">{copyLabel}</span>
              </button>
            </div>

            <div className="markdown-body markdown-body--feature">
              <MarkdownContent>{contentMarkdown}</MarkdownContent>
            </div>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#071018e8] p-5 shadow-[0_18px_52px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <TableOfContents headings={headings} activeHeading={activeHeading} />
          </div>
        </aside>
      </div>

      <BlogComments postSlug={post.slug} />
    </section>
  )
}
