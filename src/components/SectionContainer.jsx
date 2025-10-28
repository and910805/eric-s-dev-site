import React from 'react'

export default function SectionContainer({ title, subtitle, children }) {
  return (
    <section className="mb-14 sm:mb-16">
      <header className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4">
        {subtitle && (
          <div className="flex items-center gap-3">
            <span className="subtle-divider" aria-hidden="true" />
            <span className="pill-accent">{subtitle}</span>
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
