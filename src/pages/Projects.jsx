import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="Projects" title="$ ls ~/projects">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這裡整理資安研究、弱掃分析、自動化工具與前端作品。每個專案都保留重點技術、年份與連結，方便快速瀏覽。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  )
}
