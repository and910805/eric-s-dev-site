import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'classnames'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] max-w-3xl">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/20 text-zinc-100 shadow-[0_20px_60px_rgba(253,225,232,0.4)] rounded-3xl px-4 py-3 sm:px-6 sm:py-3.5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs font-semibold text-white whitespace-nowrap sm:text-sm">
            Eric&apos;s Dev Portfolio
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark sm:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="切換導覽選單"
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <ul
          id="primary-navigation"
          className={clsx(
            'mt-3 gap-2 text-[0.85rem] font-medium sm:mt-0 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-4 sm:text-sm',
            isMobileOpen ? 'flex flex-col' : 'hidden sm:flex'
          )}
        >
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'inline-flex w-full justify-center px-3 py-1.5 rounded-full transition-colors duration-200 text-center sm:w-auto',
                    isActive
                      ? 'bg-gradient-to-r from-blush-pink/70 to-soft-gold/70 text-ink-dark font-semibold shadow-glow-pink'
                      : 'text-zinc-200 hover:text-white hover:bg-white/10'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
