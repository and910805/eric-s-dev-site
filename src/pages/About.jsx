import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import { motion } from 'framer-motion'

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
        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-zinc-300">
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
