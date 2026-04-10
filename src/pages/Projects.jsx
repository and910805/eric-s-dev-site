import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import TerminalPanel from '../components/TerminalPanel.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="projects" title="$ ls -la ~/projects">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            專案區改成像在逛一台 Linux 主機。每個資料夾都是一段實作紀錄：資安研究、弱掃整理、自動化工具、前端互動作品。
          </p>
        </div>
      </SectionContainer>

      <TerminalPanel command="tree ~/projects -L 2" title="project tree">
        <div className="terminal-tree">
          <div><span className="terminal-caret">.</span></div>
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1
            const branch = isLast ? '`--' : '|--'
            const child = isLast ? '   ' : '|  '

            return (
              <div key={project.title} className="mb-4">
                <div>
                  <span className="text-zinc-500">{branch}</span>{' '}
                  <span className="text-[#dfffe4]">{project.slug}/</span>
                </div>
                <div className="pl-6">
                  <div><span className="text-zinc-500">{child}|--</span> README.md</div>
                  <div><span className="text-zinc-500">{child}|--</span> stack: {project.tech.join(', ')}</div>
                  <div><span className="text-zinc-500">{child}`--</span> year: {project.year}</div>
                </div>
              </div>
            )
          })}
        </div>
      </TerminalPanel>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="glass-card h-full">
            <div className="glass-card__inner h-full">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm leading-7 text-zinc-300">{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs text-zinc-200">
                {project.tech.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#39ff14] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#b8ffb8]"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
