import React from 'react'
import { BookOpenText, Briefcase, ShieldHalf } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const strengths = [
  {
    icon: ShieldHalf,
    title: '資安作業視角',
    text: '熟悉從掃描、盤點、弱點整理到修補溝通的完整流程，能把原始結果轉成具優先順序的改善項目。',
  },
  {
    icon: Briefcase,
    title: '技術落地能力',
    text: '不只會分析，也會把需求做成小工具、內部頁面、腳本或儀表板，讓流程真的能被使用。',
  },
  {
    icon: BookOpenText,
    title: '知識輸出能力',
    text: '擅長將技術內容拆成可理解的段落，適合做內部教材、學習地圖、證照準備與公開文章整理。',
  },
]

const skills = [
  'CEH / CEH Practical / CEH Master',
  'Weakness management and scan result interpretation',
  'Python automation and internal tooling',
  'React / Vite / Tailwind CSS front-end delivery',
  'Flask / API / SQLite lightweight service development',
  'Linux deployment, service setup, and operation support',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="About" title="把資安經驗整理成可執行成果">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
          <p>
            我目前的網站定位已經重新整理成資安專業導向，核心不是單純列作品，而是讓訪客快速理解你具備什麼能力、做過哪些實作、擁有哪些可被驗證的證照成果。
          </p>
          <p>
            你的優勢在於同時具備資安知識、實作動手能力與內容整理能力。這讓你不只可以做分析，也能把流程設計清楚，把技術內容說明清楚，並用工具把工作效率拉起來。
          </p>
          <p>
            這類型的履歷網站應該把專業可信度放在第一順位，因此我把 CEH、CEH Practical（CEHP）、CEH Master 拉成獨立證照專區，同時保留專案區來補足實務證據。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="Strengths" title="三個最該被看見的核心能力">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="glass-card">
              <div className="glass-card__inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer subtitle="Stack" title="目前網站強調的技能與能力">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-zinc-200">
              {skill}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
