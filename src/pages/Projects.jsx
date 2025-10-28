import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="Selected Work" title="專案作品">
        <div className="space-y-5 text-base leading-relaxed text-zinc-300 max-w-3xl">
          <p>
            我希望透過「安全 × 教育 × 自動化」三個面向，將技術轉化為實際價值的應用。
          </p>
          <p>
            下列專案都是實際在企業或教學情境落地的產品，由我負責需求訪談、系統規劃、UI/UX 到開發部署，確保成果能直接被團隊採用。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  )
}
