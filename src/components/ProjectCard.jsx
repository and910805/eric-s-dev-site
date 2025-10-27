import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const hasImage = project.img && project.pendingImage !== true

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/70 dark:border-white/10 dark:bg-gray-800/70 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {hasImage ? (
          <>
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-300">
              即將上傳
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 font-display">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          {project.details && (
            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {project.details}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blush-pink/40 bg-gradient-to-r from-blush-pink/10 to-soft-gold/10 px-2 py-1 font-medium text-blush-pink dark:text-soft-gold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 flex flex-wrap gap-3 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-blush-pink/30 bg-white/60 px-3 py-1.5 font-medium text-blush-pink transition hover:border-blush-pink/60 hover:bg-white/80 dark:bg-gray-900/60 dark:text-soft-gold dark:hover:bg-gray-900/80"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-white/60 px-3 py-1.5 font-medium text-sky-500 transition hover:border-sky-400/70 hover:bg-white/80 dark:bg-gray-900/60 dark:text-sky-300 dark:hover:bg-gray-900/80"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-px rounded-[1.05rem] border border-white/40 opacity-30" />
    </motion.div>
  )
}
