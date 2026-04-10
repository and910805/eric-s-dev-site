import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import TerminalPanel from '../components/TerminalPanel.jsx'
import { contact } from '../data/contact.js'
import { historyItems, identity, whoamiLines } from '../data/terminalProfile.js'

const quickCommands = [
  { command: 'tree ~/blog', label: '資安筆記', to: '/blog' },
  { command: 'ls ~/projects', label: '專案目錄', to: '/projects' },
  { command: 'certctl list', label: '證照紀錄', to: '/certifications' },
]

export default function Home() {
  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            interactive profile / shell mode
          </div>

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              $ whoami
              <span className="mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent">
                {identity.user}@{identity.host}
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              {identity.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/blog" className="terminal-button terminal-button--primary">
              open security notes
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/about" className="terminal-button terminal-button--ghost">
              man eric
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
        >
          <TerminalPanel command="id && whoami" title="identity">
            <div className="space-y-1">
              {whoamiLines.map(([key, value]) => (
                <div key={key} className="terminal-row">
                  <span className="terminal-key">{key}</span>
                  <span className="terminal-value">{value}</span>
                </div>
              ))}
            </div>
          </TerminalPanel>
        </motion.aside>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {quickCommands.map((item) => (
          <Link key={item.command} to={item.to} className="glass-card group">
            <div className="glass-card__inner">
              <div className="flex items-center gap-2 text-[#7df48d]">
                <TerminalSquare className="h-4 w-4" />
                <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">shortcut</span>
              </div>
              <p className="mono text-lg text-white">
                <span className="text-[#39ff14]">$</span> {item.command}
              </p>
              <p className="text-sm text-zinc-400 transition group-hover:text-zinc-200">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <TerminalPanel command="history | tail -4" title="learning timeline">
        <div className="space-y-4">
          {historyItems.map((item) => (
            <div key={`${item.year}-${item.command}`} className="grid gap-2 border-b border-[#39ff1414] pb-4 last:border-0 last:pb-0 md:grid-cols-[5rem_1fr]">
              <div className="mono text-[#8af7fe]">{item.year}</div>
              <div>
                <div className="mono text-[#dfffe4]">
                  <span className="terminal-caret">$</span> {item.command}
                </div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.output}</p>
              </div>
            </div>
          ))}
        </div>
      </TerminalPanel>
    </section>
  )
}
