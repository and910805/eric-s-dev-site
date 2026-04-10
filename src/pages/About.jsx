import React from 'react'
import TerminalPanel from '../components/TerminalPanel.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { manSections } from '../data/terminalProfile.js'

const skills = [
  'CEH / CEH Practical / CEH Master',
  'Web security and XSS/SQLi defensive thinking',
  'Vulnerability management and scan result interpretation',
  'Python automation and internal tooling',
  'React / Vite / Tailwind CSS front-end delivery',
  'Flask / API / SQLite lightweight service development',
  'Linux deployment, service setup, and troubleshooting',
  'Markdown documentation and knowledge-base writing',
]

const processes = [
  ['observe', '先看系統現在怎麼跑，避免直接猜。'],
  ['verify', '用測試、log、重現步驟確認問題。'],
  ['patch', '修補時盡量縮小影響範圍，讓改動可回頭追。'],
  ['document', '把過程寫成筆記，下一次可以更快。'],
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="manual page" title="$ man eric">
        <TerminalPanel command="man eric">
          <div className="space-y-6">
            {manSections.map((section) => (
              <section key={section.name}>
                <h3 className="mono text-sm font-semibold uppercase tracking-[0.24em] text-[#8af7fe]">
                  {section.name}
                </h3>
                <p className="mt-2 text-base leading-8 text-zinc-300">{section.body}</p>
              </section>
            ))}
          </div>
        </TerminalPanel>
      </SectionContainer>

      <SectionContainer subtitle="workflow" title="$ cat ~/mindset/process.md">
        <div className="grid gap-4 md:grid-cols-4">
          {processes.map(([name, text], index) => (
            <article key={name} className="glass-card">
              <div className="glass-card__inner">
                <div className="mono text-xs uppercase tracking-[0.24em] text-[#8af7fe]">
                  step {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mono text-xl font-semibold text-white">{name}</h3>
                <p className="text-sm leading-7 text-zinc-300">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer subtitle="stack" title="$ compgen -A function eric">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] px-4 py-4 text-sm leading-7 text-zinc-200">
              <span className="terminal-caret">-&gt;</span> {skill}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
