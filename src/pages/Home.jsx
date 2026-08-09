import React, { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BookOpenCheck, Github, Linkedin, Mail, ShieldCheck, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { projects } from '../data/projects.js'
import { identity, whoamiLines } from '../data/terminalProfile.js'
import { fetchBlogPosts } from '../lib/blogApi.js'

const fallbackLatestPost = {
  slug: 'ithome-2026-day-30',
  title: 'Day 30 - 建立自己的 CVE／CNA 漏洞通報檢查清單',
  date: '2026-08-05',
  excerpt: '把三十天的漏洞通報內容，收成一份可以重複使用的發布前檢查清單。',
}

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [seriesPosts, setSeriesPosts] = useState([])
  const featuredProject = projects.find((project) => project.slug === 'nessus-vulnerability-dashboard') ?? projects[0]

  useEffect(() => {
    fetchBlogPosts()
      .then((posts) => {
        setSeriesPosts(posts.filter((post) => post.categorySlug === 'ithome-2026-ironman'))
      })
      .catch(() => {})
  }, [])

  const latestPost = useMemo(() => {
    if (!seriesPosts.length) return fallbackLatestPost
    return [...seriesPosts].sort((a, b) => b.date.localeCompare(a.date))[0]
  }, [seriesPosts])
  const seriesCount = seriesPosts.length || 30
  const seriesProgress = Math.min((seriesCount / 30) * 100, 100)
  const enter = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
  const enterInitial = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }

  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <motion.div
          initial={enterInitial}
          animate={enter}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            profile / active
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="space-y-5">
              <h1 className="section-title max-w-4xl">
                $ whoami
                <span className="mt-3 block bg-[linear-gradient(90deg,#4ade80_0%,#67e8f9_55%,#effff5_100%)] bg-clip-text text-transparent">
                  Eric
                </span>
              </h1>

              <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                {identity.summary}
              </p>
            </div>

            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.16 }}
              className="mx-auto w-full max-w-[220px] lg:mx-0 lg:justify-self-center"
            >
              <div className="terminal-outline relative overflow-hidden rounded-2xl border-[#4ade80]/25 bg-[linear-gradient(180deg,rgba(6,18,26,0.96),rgba(2,10,16,0.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(74,222,128,0.12)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[calc(1rem-1px)] before:border before:border-[#67e8f9]/10 before:content-['']">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="mono text-[0.58rem] uppercase tracking-[0.26em] text-[#86efac]">
                    cert badge
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                </div>
                <img
                  src="/CEHMASTER_5FB43496785F.png"
                  alt="CEH certification"
                  className="relative z-[1] h-auto w-full rounded-xl object-contain shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
                />
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-full bg-[#4ade80]/20 blur-2xl" />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/blog" className="terminal-button terminal-button--primary">
              查看資安筆記
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/projects" className="terminal-button terminal-button--ghost">
              查看專案
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]">email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex min-h-11 items-center gap-2 break-all text-sm text-zinc-100 hover:text-[#bbf7d0]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#4ade80]" />
                {contact.email}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]">github</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-100 hover:text-[#bbf7d0]"
              >
                <Github className="h-4 w-4 text-[#4ade80]" />
                {contact.githubUsername}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]">linkedin</div>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-100 hover:text-[#bbf7d0]"
              >
                <Linkedin className="h-4 w-4 text-[#4ade80]" />
                {contact.linkedinHandle}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={enterInitial}
          animate={enter}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#86efac]">
              <TerminalSquare className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">identity</span>
            </div>
            <div className="space-y-1">
              {whoamiLines.slice(0, 4).map(([key, value]) => (
                <div key={key} className="terminal-row">
                  <span className="terminal-key">{key}</span>
                  <span className="terminal-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.section
        initial={enterInitial}
        whileInView={enter}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        aria-labelledby="home-now-title"
      >
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono text-xs uppercase tracking-[0.24em] text-[#7dd3fc]">Now building</p>
            <h2 id="home-now-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              最近在忙什麼？
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            不只放自我介紹，直接看看最近的文章、系列進度和實作專案。
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="home-bento-card lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4ade803d] bg-[#4ade8014] text-[#86efac]">
                <BookOpenCheck className="h-5 w-5" />
              </div>
              <span className="mono rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                {Math.min(seriesCount, 30)} / 30
              </span>
            </div>
            <div>
              <p className="mono text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">2026 iThome Ironman</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                一個漏洞的公開旅程：從 CVE 編號到風險判讀
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                從漏洞被編號、公開、分類與評分，一路整理到實務上的修補優先順序。
              </p>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-xs text-zinc-500">
                <span>網站收錄進度</span>
                <span>{Math.round(seriesProgress)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#4ade80,#67e8f9)]" style={{ width: `${seriesProgress}%` }} />
              </div>
            </div>
            <Link to="/blog" className="terminal-button terminal-button--ghost w-full sm:w-fit">
              打開系列目錄
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="home-bento-card lg:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-[#f4d58d]">Latest note</span>
              <span className="text-xs text-zinc-500">{latestPost.date}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold leading-snug text-white">{latestPost.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">{latestPost.excerpt}</p>
            </div>
            <Link to={`/blog/${latestPost.slug}`} className="terminal-button terminal-button--primary mt-auto w-full sm:w-fit">
              閱讀最新文章
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="home-bento-card lg:col-span-12">
            <div className="grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#67e8f93d] bg-[#67e8f914] text-[#7dd3fc]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="mono text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">Featured project</p>
                <h3 className="mt-2 text-xl font-bold text-white">{featuredProject.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{featuredProject.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.tech.slice(0, 4).map((tech) => (
                    <li key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/projects" className="terminal-button terminal-button--ghost w-full sm:w-auto">
                看更多專案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </motion.section>
    </section>
  )
}
