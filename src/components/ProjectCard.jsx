import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="glass-card h-full"
    >
      <div className="glass-card__inner h-full">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mono text-xs font-semibold uppercase tracking-[0.24em] text-[#99f6e4]/80">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                {project.title}
              </h3>
            </div>
            {project.year && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                {project.year}
              </span>
            )}
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
              className="inline-flex items-center gap-2 rounded-full bg-[#4ade80] px-4 py-2 text-sm font-semibold text-[#052012] transition hover:bg-[#6ee7a0]"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#4ade8066] hover:bg-[#4ade800d]"
            >
              <ExternalLink className="h-4 w-4" />
              查看
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
