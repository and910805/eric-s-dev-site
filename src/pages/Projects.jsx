import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="Projects" title="用專案證明你的技術落地能力">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這一區保留作品集的價值，但敘事方式改成支援你的資安定位。重點不只是做過什麼，而是這些專案如何反映你在分析、整理、自動化與交付上的能力。
          </p>
          <p>
            我把專案分類成資安分析、自動化工具、教學互動與前端實作，讓讀者更容易理解你的技術跨度與可應用場景。
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
