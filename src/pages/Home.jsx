import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'

export default function Home() {
  return (
    <section className="relative">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-medium text-soft-gold/90 shadow-[0_20px_60px_rgba(245,230,197,0.45)]">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blush-pink to-soft-gold shadow-glow-pink" />
          <span>Available for freelance / 接案中</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-5xl">
          Hi, I&apos;m Eric.
          <br />
          <span className="bg-gradient-to-r from-blush-pink via-soft-gold to-white bg-clip-text text-transparent">
            Full-Stack / Security / Automation.
          </span>
        </h1>

        <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
          我幫公司把需求變成可以線上用的東西：<br />
          ．程式設計（Python / C++）<br />
          ．網站開發（React 全端，含後端 API）<br />
          ．資安、自動化、內部工具整合（報表、儀表板、工作派工）
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush-pink/80 to-soft-gold/80 px-5 py-2.5 text-sm font-semibold text-ink-dark shadow-glow-pink hover:shadow-[0_40px_120px_rgba(253,225,232,0.5)] transition"
          >
            <span>看作品</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-[0.8rem]">
            <a
              href={"mailto:" + contact.email}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-zinc-200 hover:text-white hover:bg-white/20 transition"
            >
              <Mail className="w-4 h-4" />
              <span>{contact.email}</span>
            </a>
            <a
              href={"https://github.com/" + contact.githubUsername}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-zinc-200 hover:text-white hover:bg-white/20 transition"
            >
              <Github className="w-4 h-4" />
              <span>{contact.githubUsername}</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Quick stats */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid gap-4 sm:grid-cols-3 text-[0.8rem]"
      >
        {[
          {
            stat: 'Full-Stack',
            desc: 'React / Flask / API / DB / 部署',
          },
          {
            stat: 'Automation',
            desc: '自動化報表、任務派工、照片回傳流程',
          },
          {
            stat: 'Security',
            desc: '弱點掃描儀表板、修補追蹤',
          },
        ].map((item, idx) => (
          <li
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="text-sm font-semibold text-white">
              {item.stat}
            </div>
            <div className="mt-1 text-zinc-400 leading-relaxed">
              {item.desc}
            </div>
          </li>
        ))}
      </motion.ul>

      {/* Focus areas */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 space-y-6"
      >
        <p className="text-base text-zinc-200 leading-relaxed">
          我希望透過「安全 × 教育 × 自動化」三個面向，將技術轉化為實際價值的應用。
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div className="rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 p-5 text-ink-dark">
            <h3 className="text-lg font-semibold font-display">Information Security</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              弱點掃描、滲透測試與治理流程自動化，協助企業把資安作業變成可追蹤的儀表板與行動方案。
            </p>
            <a
              href="https://and910805.github.io/eric_site/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-dark/80 hover:text-ink-dark"
            >
              <ExternalLink className="h-4 w-4" />
              Eric’s InfoSec Site
            </a>
          </div>

          <div className="rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 p-5 text-ink-dark">
            <h3 className="text-lg font-semibold font-display">Programming Education</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              以遊戲化教材與互動課程讓小學到高中學生理解演算法、邏輯思考與程式設計。
            </p>
            <a
              href="https://python--5fbm8pp.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-dark/80 hover:text-ink-dark"
            >
              <ExternalLink className="h-4 w-4" />
              家教視聽介紹頁
            </a>
          </div>

          <div className="rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 p-5 text-ink-dark">
            <h3 className="text-lg font-semibold font-display">Automation & Dev</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              將內部流程、任務派工與資料追蹤系統化，交付真正被現場採用的 Web / App 解決方案。
            </p>
            <a
              href="https://ithelp.ithome.com.tw/users/20171891/ironman/8352"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-dark/80 hover:text-ink-dark"
            >
              <ExternalLink className="h-4 w-4" />
              iThome 鐵人賽紀錄
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-zinc-300 backdrop-blur-xl">
          <div className="font-semibold text-white">More Links</div>
          <ul className="mt-3 space-y-2">
            {[
              { label: 'iThome 鐵人賽紀錄', href: 'https://ithelp.ithome.com.tw/users/20171891/ironman/8352' },
              { label: 'Eric’s InfoSec Site', href: 'https://and910805.github.io/eric_site/' },
              { label: 'HackMD 技術筆記', href: 'https://hackmd.io/@LKanFpXQTUSJayug7EHeiA' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-200 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
