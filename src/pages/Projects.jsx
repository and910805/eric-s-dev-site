import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer
        subtitle="Selected Work"
        title="專案作品"
      >
        <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
          下面是我實際有在跑、真的會被同事 / 客戶使用的系統與網站。
          每一個都是我自己主導開發，包含前端 UI、後端 API、資料庫、部署、
          還有實務上的需求整合。
        </p>
      </SectionContainer>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  )
}
