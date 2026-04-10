import React from 'react'

export default function TerminalPanel({ command, title, children, className = '' }) {
  return (
    <section className={`terminal-panel ${className}`}>
      <div className="terminal-panel__bar">
        <span className="text-[#39ff14]">eric@security-terminal</span>
        <span className="text-zinc-500">:</span>
        <span className="text-[#8af7fe]">~</span>
        <span className="text-zinc-500">$</span>
        <span className="text-zinc-100">{command}</span>
      </div>
      {title && <h2 className="terminal-panel__title">{title}</h2>}
      <div className="terminal-panel__body">{children}</div>
    </section>
  )
}
