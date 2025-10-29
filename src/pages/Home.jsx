import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail, ExternalLink, ShieldCheck, GraduationCap, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'

export default function Home() {
  const quickStats = [
    {
      stat: 'Security Ops',
      desc: '弱點掃描治理、滲透測試與修補 KPI 追蹤',
    },
    {
      stat: 'Teaching Systems',
      desc: '互動課程、遊戲化教材與學習數據儀表板',
    },
    {
      stat: 'Automation',
      desc: '內部流程上雲、任務派工與跨部門協作',
    },
  ]

  const heroHighlights = [
    {
      icon: ShieldCheck,
      title: 'Information Security',
      text: 'Nessus Dashboard、EDR 與 ISO 27001 流程整合',
    },
    {
      icon: GraduationCap,
      title: 'Programming Tutor',
      text: '互動式教材、遊戲化演算法課程與學員成果回饋',
    },
    {
      icon: Cpu,
      title: 'Automation Builder',
      text: '將內部需求轉成能立即落地的 Web / API 工具',
    },
  ]

  return (
    <section className="relative">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:items-start">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold text-soft-gold/90 shadow-[0_20px_60px_rgba(245,230,197,0.45)]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blush-pink to-soft-gold shadow-glow-pink" />
            <span>Security · Education · Automation</span>
          </div>

          <h1 className="text-[1.65rem] font-semibold leading-[1.3] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.1]">
            Hi, I&apos;m Eric —{' '}
            <span className="whitespace-nowrap bg-gradient-to-r from-blush-pink via-soft-gold to-white bg-clip-text text-transparent text-[1.35rem] sm:text-[2.75rem]">
              資安&程式設計出身的全端開發者。
            </span>
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            <p>
              我把複雜的資安與內部流程，轉成團隊真的會用的 Web / App 工具：從需求訪談、系統設計、到部署維運一條龍。
            </p>
            <p>
              專長涵蓋 React / Flask 全端開發、Python 自動化、C++ 系統程式，以及弱點掃描治理與 ISO 27001 合規實務。
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush-pink/80 to-soft-gold/80 px-6 py-3 text-sm font-semibold text-ink-dark shadow-glow-pink transition hover:shadow-[0_40px_120px_rgba(253,225,232,0.5)]"
            >
              <span>看作品</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-[0.85rem]">
              <a
                href={"mailto:" + contact.email}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-zinc-200 transition hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </a>
              <a
                href={"https://github.com/" + contact.githubUsername}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-zinc-200 transition hover:bg-white/20 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>{contact.githubUsername}</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card"
        >
          <div className="glass-card__inner text-sm text-zinc-300">
            <span className="pill-accent w-fit">專業焦點</span>
            <h2 className="text-2xl font-semibold text-white">我把安全、教育、開發串在一起</h2>
            <p className="leading-relaxed">
              7+ 年資安治理與內部系統經驗，專注打造可以直接交付給營運團隊使用的產品。以下是我目前的主力服務：
            </p>
            <ul className="space-y-4">
              {heroHighlights.map((item) => (
                <li key={item.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blush-pink/40 to-soft-gold/30 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <p className="text-xs leading-relaxed text-zinc-300">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      {/* Quick stats */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid gap-4 text-[0.85rem] sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {quickStats.map((item) => (
          <li key={item.stat} className="glass-card">
            <div className="glass-card__inner">
              <div className="text-base font-semibold text-white">{item.stat}</div>
              <div className="text-zinc-300 leading-relaxed">{item.desc}</div>
            </div>
          </li>
        ))}
      </motion.ul>

      {/* Focus areas */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 sm:mt-16 space-y-6 sm:space-y-8"
      >
        <p className="text-base leading-relaxed text-zinc-200">
          我希望透過「安全 × 教育 × 自動化」三個面向，將技術轉化為實際價值的應用。
        </p>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 text-sm">
          {[
            {
              title: 'Information Security',
              copy: '弱點掃描、滲透測試與治理流程自動化，協助企業把資安作業變成可追蹤的儀表板與行動方案。',
              link: 'https://and910805.github.io/eric_site/',
              linkLabel: 'Eric’s InfoSec Site',
            },
            {
              title: 'Programming Education',
              copy: '以遊戲化教材與互動課程讓小學到高中學生理解演算法、邏輯思考與程式設計。',
              link: 'https://python--5fbm8pp.gamma.site/',
              linkLabel: '家教視聽介紹頁',
            },
            {
              title: 'Automation & Dev',
              copy: '將內部流程、任務派工與資料追蹤系統化，交付真正被現場採用的 Web / App 解決方案。',
              link: 'https://ithelp.ithome.com.tw/users/20171891/ironman/8352',
              linkLabel: 'iThome 鐵人賽紀錄',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card">
              <div className="glass-card__inner text-zinc-200">
                <h3 className="text-lg font-semibold text-white font-display">{item.title}</h3>
                <p className="leading-relaxed text-sm">{item.copy}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-soft-gold transition hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  {item.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card text-sm text-zinc-300">
          <div className="glass-card__inner">
            <div className="text-base font-semibold text-white">More Links</div>
            <ul className="space-y-2">
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
                    className="inline-flex items-center gap-2 text-zinc-200 transition hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
