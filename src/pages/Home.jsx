import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail, ShieldCheck, GraduationCap, Boxes } from 'lucide-react'
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

        <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-5xl font-display">
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

      {/* Focus statement */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 max-w-3xl text-base leading-relaxed text-zinc-300"
      >
        我希望透過「安全 × 教育 × 自動化」三個面向，把技術轉化成真正幫助團隊的應用。
      </motion.p>

      {/* Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid gap-6 lg:grid-cols-3"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                主業
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white font-display">
                Information Security Expertise
              </h3>
            </div>
            <ShieldCheck className="h-10 w-10 text-soft-gold" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            熟悉弱點掃描、滲透測試、EDR 與 ISO 27001 合規管理，將資安治理融入日常營運。
          </p>
          <p className="mt-3 text-xs leading-relaxed text-zinc-400">
            近期專注在弱點報告自動化、攻擊面盤點與修補追蹤儀表板設計。
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                副業
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white font-display">
                程式家教（Programming Tutor）
              </h3>
            </div>
            <GraduationCap className="h-10 w-10 text-soft-gold" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            面向小學到高中學生，透過互動與遊戲化讓程式邏輯變得有趣好上手。
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href="https://python--5fbm8pp.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-soft-gold transition hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
              家教介紹頁
            </a>
            <a
              href="https://and910805.github.io/Binary-Search-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-soft-gold transition hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
              二分法演算法遊戲
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                開發
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white font-display">
                Projects / 開發作品
              </h3>
            </div>
            <Boxes className="h-10 w-10 text-soft-gold" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            從任務派工、自動化儀表板到互動教學遊戲，所有作品都在真實場域上線使用。
          </p>
          <Link
            to="/projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-soft-gold transition hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
            查看全部作品
          </Link>
        </div>
      </motion.div>

      {/* Quick stats */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
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
    </section>
  )
}
