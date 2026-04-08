import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileBadge2,
  Github,
  Mail,
  Radar,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { certifications } from '../data/certifications.js'

const coreAreas = [
  {
    icon: ShieldCheck,
    title: '弱點管理與資安實務',
    text: '聚焦漏洞盤點、掃描結果整理、風險排序與修補溝通，讓輸出不只是一份報告，而是可執行的改善清單。',
  },
  {
    icon: Workflow,
    title: '流程自動化',
    text: '用 Python、腳本與 API 串接把重複性工作標準化，降低人工作業負擔，提升交付品質與可追蹤性。',
  },
  {
    icon: Radar,
    title: '技術整理與教學',
    text: '把艱澀的技術內容轉成教材、文章與互動工具，讓知識可以複用，也能支援自學與內部推廣。',
  },
]

const stats = [
  { value: '3', label: '核心資安證照', detail: 'CEH / CEHP / CEH Master' },
  { value: '7+', label: '代表性專案', detail: '資安、自動化、教學與前端實作' },
  { value: '2025', label: '鐵人賽完賽', detail: '持續輸出資安技術內容' },
]

export default function Home() {
  const featuredCerts = certifications.slice(0, 3)

  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            cyber profile / active
          </div>

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              Eric
              <span className="mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent">
                Cybersecurity Practitioner
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              熟悉紅藍隊思維，專注於弱點管理、流程優化與資安實務，持續把技術落實在日常維運與防禦改善中。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/certifications" className="terminal-button terminal-button--primary">
              open certifications
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/projects" className="terminal-button terminal-button--ghost">
              inspect projects
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Mail className="h-4 w-4 text-[#39ff14]" />
                {contact.email}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">github</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Github className="h-4 w-4 text-[#39ff14]" />
                {contact.githubUsername}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#7df48d]">
              <TerminalSquare className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">security status</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">證照導向的專業識別</h2>
            <p className="text-sm leading-7 text-zinc-300">
              不走一般作品集的路線，而是把網站包裝成帶有技術面板感的資安履歷頁。第一眼先看到角色，第二眼再看到證照與成果。
            </p>

            <ul className="space-y-3">
              {featuredCerts.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-xs uppercase tracking-[0.2em] text-[#8af7fe]">{item.issuer}</p>
                      <p className="mt-1 font-semibold text-white">{item.shortTitle}</p>
                    </div>
                    <FileBadge2 className="h-5 w-5 text-[#39ff14]" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="glass-card">
            <div className="glass-card__inner">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">{item.label}</div>
              <div className="text-4xl font-semibold text-[#d7ffd8]">{item.value}</div>
              <div className="text-sm leading-6 text-zinc-400">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card">
        <div className="glass-card__inner space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
              <TerminalSquare className="h-5 w-5" />
            </div>
            <div>
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">career path</div>
              <h2 className="text-2xl font-semibold text-white">職涯歷程</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] p-5">
              <div className="mono text-xs uppercase tracking-[0.2em] text-[#8af7fe]">01</div>
              <h3 className="mt-2 text-lg font-semibold text-white">Deloitte</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">累積 1 年實務經驗，建立資安專案執行與問題整理能力。</p>
            </div>

            <div className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] p-5">
              <div className="mono text-xs uppercase tracking-[0.2em] text-[#8af7fe]">02</div>
              <h3 className="mt-2 text-lg font-semibold text-white">台灣精材</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">累積 1 年經驗，持續將資安實務與流程改善落地到工作現場。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {coreAreas.map((item) => (
          <div key={item.title} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
