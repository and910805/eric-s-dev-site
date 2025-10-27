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
      className="group glass-card h-full"
    >
      <div className="glass-card__inner">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white font-display">
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
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium leading-none text-zinc-200"
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
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blush-pink/80 to-soft-gold/80 px-4 py-2 font-semibold text-ink-dark shadow-[0_15px_40px_rgba(253,225,232,0.35)] transition hover:scale-[1.02]"
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
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
