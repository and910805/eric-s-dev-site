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
      className="group relative flex h-full flex-col gap-5 rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 p-6 transition hover:shadow-lg"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-ink-dark font-display dark:text-soft-gold">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-200">
          {project.description}
        </p>
      </div>

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 text-[0.7rem]">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink-dark/90 px-2 py-1 font-medium leading-none text-white dark:bg-white/20 dark:text-soft-gold"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-dark/10 bg-ink-dark/90 px-3 py-1.5 font-medium text-white transition hover:bg-ink-dark dark:border-white/20 dark:bg-white/10 dark:text-soft-gold"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-dark/10 bg-white/80 px-3 py-1.5 font-medium text-ink-dark transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-soft-gold"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
