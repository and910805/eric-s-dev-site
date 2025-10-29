import React from 'react'

export default function SectionContainer({ title, subtitle, children }) {
  return (
    <section className="mb-14 sm:mb-16">
      <header className="mb-6 flex flex-col gap-3 text-center sm:mb-8 sm:gap-4 sm:text-left">
        {subtitle && (
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <span className="subtle-divider hidden sm:block" aria-hidden="true" />
            <span className="pill-accent">{subtitle}</span>
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
