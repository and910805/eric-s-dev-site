import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="group relative flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition hover:border-white/20 hover:bg-zinc-900/80"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 text-[0.7rem]">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 font-medium leading-none text-soft-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-3 text-[0.8rem]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-soft-gold/40 bg-white/5 px-3 py-1.5 font-medium text-soft-gold transition hover:border-soft-gold/80 hover:bg-white/10 hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-soft-gold/40 bg-white/5 px-3 py-1.5 font-medium text-soft-gold transition hover:border-soft-gold/80 hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>

      <div className="pointer-events-none absolute inset-px rounded-[1rem] ring-1 ring-white/5" />
    </motion.article>
  )
}
