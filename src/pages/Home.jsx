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

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.45, delay: 0.18 },
                scale: { duration: 0.45, delay: 0.18 },
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="mx-auto w-full max-w-[220px] lg:mx-0 lg:justify-self-center"
            >
              <div className="terminal-outline relative overflow-hidden rounded-2xl border-[#39ff14]/25 bg-[linear-gradient(180deg,rgba(6,18,26,0.96),rgba(2,10,16,0.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(57,255,20,0.12)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[calc(1rem-1px)] before:border before:border-[#3df2ff]/10 before:content-['']">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="mono text-[0.58rem] uppercase tracking-[0.26em] text-[#7df48d]">
                    cert badge
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.9)]" />
                </div>
                <img
                  src="/CEHMASTER_5FB43496785F.png"
                  alt="CEH certification"
                  className="relative z-[1] h-auto w-full rounded-xl object-contain shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
                />
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-full bg-[#39ff14]/20 blur-2xl" />
              </div>
            </motion.div>
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
