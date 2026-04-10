import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'

const skills = [
  'CEH / CEH Practical / CEH Master',
  'Web security and defensive thinking',
  'Vulnerability management',
  'Python automation',
  'React / Vite / Tailwind CSS',
  'Flask / API / SQLite',
  'Linux deployment and troubleshooting',
  'Markdown knowledge-base writing',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="About" title="$ man eric">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
          <p>
            我主要關注資安、後端工具、自動化與技術筆記整理。比起把作品做得很花，我更在意問題能不能被看懂、被驗證、被維護。
          </p>
          <p>
            目前網站定位是個人知識庫與作品集：資安筆記放學習紀錄，專案放實作經驗，證照頁則整理已完成的能力驗證。
          </p>
          <p>
            做事習慣是先觀察現況，再重現問題、修補、記錄。這也是這個網站想呈現的風格：像 terminal，但不要讓 terminal 搶走內容。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="Stack" title="$ cat ~/skills.txt">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] px-4 py-4 text-sm leading-7 text-zinc-200">
              {skill}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
