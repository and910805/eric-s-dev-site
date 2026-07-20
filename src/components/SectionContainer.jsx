import React from 'react'

export default function SectionContainer({ title, subtitle, children, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <section className="mb-16 sm:mb-20">
      <header className={isCenter ? 'mx-auto mb-8 max-w-3xl text-center' : 'mb-8 max-w-3xl'}>
        {subtitle && (
          <div className={isCenter ? 'mb-4 flex justify-center' : 'mb-4'}>
            <span className="terminal-label">
              <span className="terminal-dot" />
              {subtitle}
            </span>
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
