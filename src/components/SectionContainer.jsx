import React from 'react'

export default function SectionContainer({ title, subtitle, children }) {
  return (
    <section className="mb-16">
      <header className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-soft-gold/80">
          {subtitle}
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white font-display">
          {title}
        </h2>
      </header>
      {children}
    </section>
  )
}
