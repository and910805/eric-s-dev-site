import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import { motion } from 'framer-motion'
import { ExternalLink, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

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
        subtitle="Profile"
        title="主業 / 副業 / 開發"
      >
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="glass-card">
            <div className="glass-card__inner">
              <h3 className="text-xl font-semibold text-white font-display">Information Security Expertise</h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                我主業在資安（Cybersecurity）領域，熟悉弱點掃描、滲透測試、EDR 與 ISO 27001 合規管理。
                網站中的技術文章與工具也多與資安實務相關。
              </p>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <h3 className="text-xl font-semibold text-white font-display">程式家教（Programming Tutor）</h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                我同時從事程式家教，教學對象為小學至高中學生，
                以「互動性」與「遊戲化學習」為核心，讓學生能快樂學會程式邏輯。
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="https://python--5fbm8pp.gamma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  家教視聽介紹頁
                </a>
                <a
                  href="https://and910805.github.io/Binary-Search-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  二分法演算法遊戲
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <h3 className="text-xl font-semibold text-white font-display">Automation & Freelance Development</h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                我協助企業把資安、營運流程與開發需求串起來，落地成可用的工具與儀表板，
                也提供接案與顧問服務，專注在安全、自動化與教育產品的整合。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush-pink/80 to-soft-gold/80 px-4 py-2 text-sm font-semibold text-ink-dark shadow-[0_15px_40px_rgba(253,225,232,0.35)] transition hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                聯絡我談合作
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        subtitle="Who I Am"
        title="關於我"
      >
        <div className="max-w-4xl space-y-5 text-base leading-relaxed text-zinc-300 sm:space-y-6">
          <p>
            我是 Eric，把「安全 × 教育 × 自動化」變成有感價值的工程師。
            我打造的工具會真正進到公司內網或雲端環境，寫進 SOP 給夥伴使用。
          </p>

          <p>
            從需求訪談、流程梳理到 UI/UX 與後端架構，我習慣從 0 到 1 迅速迭代，
            讓同仁可以透過一個按鈕、一個儀表板就完成原本繁瑣的資安與營運工作。
          </p>

          <p>
            技術涵蓋 Python / C++、React 全端開發、API 與資料庫設計、
            Linux 部署、自動化報表，以及資安弱點追蹤與風險治理儀表板。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer
        subtitle="Core stack"
        title="技能 / 技術堆疊"
      >
        <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-[0.9rem]">
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
