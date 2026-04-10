import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { identity, whoamiLines } from '../data/terminalProfile.js'

export default function Home() {
  return (
    <section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            profile / active
          </div>

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              $ whoami
              <span className="mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent">
                Eric
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              {identity.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/blog" className="terminal-button terminal-button--primary">
              查看資安筆記
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/projects" className="terminal-button terminal-button--ghost">
              查看專案
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Mail className="h-4 w-4 text-[#39ff14]" />
                {contact.email}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">github</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Github className="h-4 w-4 text-[#39ff14]" />
                {contact.githubUsername}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">linkedin</div>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Linkedin className="h-4 w-4 text-[#39ff14]" />
                {contact.linkedinHandle}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#7df48d]">
              <TerminalSquare className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">identity</span>
            </div>
            <div className="space-y-1">
              {whoamiLines.slice(0, 4).map(([key, value]) => (
                <div key={key} className="terminal-row">
                  <span className="terminal-key">{key}</span>
                  <span className="terminal-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
