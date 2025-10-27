import React from 'react'
import { Link } from 'react-router-dom'
import SectionContainer from '../components/SectionContainer.jsx'
import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap, Boxes } from 'lucide-react'

export default function About() {
  const skills = [
    'React / Vite / TailwindCSS',
    'Flask / Python API / SQLite',
    'Automation Scripts / 報表自動化',
    'Deployment on Linux / EC2 / Nginx / systemd',
    'Security scanning / Nessus / Dashboarding',
    'C++ 系統層邏輯 / 效能思考',
  ]

  return (
    <>
      <SectionContainer
        subtitle="Who I Am"
        title="關於我"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                  主業
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white font-display">
                  Information Security Expertise
                </h3>
              </div>
              <ShieldCheck className="h-9 w-9 text-soft-gold" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              我主業在資安（Cybersecurity）領域，熟悉弱點掃描、滲透測試、EDR 與 ISO 27001 合規管理。
              網站中的技術文章與工具也多與資安實務相關。
            </p>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              擅長把合規需求轉換為自動化流程，並用視覺化儀表板協助團隊縮短修補與回報時間。
            </p>
            <div className="mt-6 flex-1 rounded-xl border border-white/10 bg-white/10 p-4">
              <img
                src="/images/certifications/infosec-cert.svg"
                alt="Information security certification badge"
                className="mx-auto h-32 w-auto"
              />
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                  副業
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white font-display">
                  程式家教（Programming Tutor）
                </h3>
              </div>
              <GraduationCap className="h-9 w-9 text-soft-gold" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              我同時從事程式家教，教學對象為小學至高中學生，以「互動性」與「遊戲化學習」為核心，讓學生能快樂學會程式邏輯。
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="https://python--5fbm8pp.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-soft-gold transition hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">Link</span>
                家教介紹頁
              </a>
              <a
                href="https://and910805.github.io/Binary-Search-game/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-soft-gold transition hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">Game</span>
                二分法演算法遊戲
              </a>
            </div>
            <div className="mt-6 flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <img
                src="/images/projects/binary-search-game.png"
                alt="Binary Search Game preview"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
                  開發
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white font-display">
                  Projects / 開發作品
                </h3>
              </div>
              <Boxes className="h-9 w-9 text-soft-gold" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              把資安與自動化經驗轉成實際工具：任務派工平台、弱點報告儀表板、互動教學遊戲與 LINE AI 測驗系統等。
            </p>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              每個專案都是實際需求衍生，從需求訪談、原型、開發到部署與維運都由我全程負責。
            </p>
            <Link
              to="/projects"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-soft-gold transition hover:text-white"
            >
              查看專案總覽
            </Link>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <img
                src="/images/projects/taskgo.png"
                alt="TaskGo dashboard preview"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.article>
        </div>

        <div className="mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-zinc-300">
          <p>
            我是 Eric，一個把「實際痛點」做成「真的有人在用的工具」的人。
            我平常做的東西不是展示用的 demo，而是會拿去現場用、寫進 SOP、上線跑在公司內網/雲端的系統。
          </p>

          <p>
            我擅長從 0 到 1：先快速做出可以用的版本，然後迭代 UI、流程、自動化，
            再幫使用者把日常流程整成一個按鈕或一個頁面。
          </p>

          <p>
            技術範圍包含 Python/C++ 程式設計、React 全端網站開發、
            後端 API、Linux 服務部署、自動化報表、資安弱點追蹤儀表板等。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer
        subtitle="Core stack"
        title="技能 / 技術堆疊"
      >
        <ul className="grid gap-3 sm:grid-cols-2 text-[0.9rem]">
          {skills.map((skill, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-200 backdrop-blur-xl"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blush-pink to-soft-gold shadow-glow-pink" />
              <span className="leading-relaxed">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
