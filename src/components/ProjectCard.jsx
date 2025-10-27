import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-glow-pink hover:shadow-[0_40px_120px_rgba(245,230,197,0.4)] transition-shadow duration-300"
    >
      <div className="aspect-video w-full overflow-hidden bg-ink-dark/50">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover object-center opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white flex flex-wrap items-center gap-2">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-[0.7rem]">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gradient-to-r from-blush-pink/20 to-soft-gold/20 text-blush-pink border border-white/20 px-2 py-1 font-medium text-[0.7rem] leading-none"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-3 text-[0.8rem]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-zinc-200 hover:text-white hover:bg-white/20 transition"
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
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-zinc-200 hover:text-white hover:bg-white/20 transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* subtle gradient border glow */}
      <div className="pointer-events-none absolute inset-px rounded-[1rem] ring-1 ring-white/10 ring-offset-0" />
    </motion.div>
  )
}
