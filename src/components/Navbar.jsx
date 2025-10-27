import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'classnames'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/20 text-zinc-100 shadow-[0_20px_60px_rgba(253,225,232,0.4)] rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-6">
        <div className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
          Eric&apos;s Dev Portfolio
        </div>
        <ul className="flex items-center gap-3 sm:gap-4 text-[0.8rem] sm:text-sm font-medium">
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'px-3 py-1.5 rounded-full transition-colors duration-200',
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
