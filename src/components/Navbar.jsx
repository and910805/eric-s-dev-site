import React, { useEffect, useState } from 'react'
import clsx from 'classnames'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, TerminalSquare, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我' },
  { to: '/projects', label: '專案' },
  { to: '/blog', label: '文章' },
  { to: '/cv', label: 'CV' },
  { to: '/certifications', label: '證照' },
  { to: '/contact', label: '聯絡' },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const updateNavbar = () => setIsCompact(window.scrollY > 48)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  return (
    <header
      className={clsx(
        'fixed left-1/2 z-40 w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2 transition-[top] duration-200',
        isCompact ? 'top-2' : 'top-4'
      )}
    >
      <nav
        className={clsx(
          'rounded-[1.15rem] border border-[#4ade8029] bg-[#030a10e3] px-4 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[padding] duration-200 sm:px-6',
          isCompact ? 'py-2' : 'py-3'
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden text-white">
            <span
              className={clsx(
                'relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#4ade8050] bg-[radial-gradient(circle_at_top,#10321f_0%,#06110d_62%,#03070a_100%)] shadow-[0_0_12px_rgba(74,222,128,0.12)] transition-[width,height] duration-200',
                isCompact ? 'h-10 w-10' : 'h-11 w-11'
              )}
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(74,222,128,0.1)_48%,transparent_52%,transparent_100%)] opacity-80" />
              <span className="pointer-events-none absolute inset-x-1 top-1 h-px bg-[#7dd3fc]/70" />
              <span className="mono relative text-sm font-bold tracking-[-0.12em] text-[#86efac]">
                &gt;_
              </span>
            </span>
            <span className="min-w-0">
              <span className="mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
                Eric<span className="hidden sm:inline"> / Security Terminal</span>
              </span>
              <span
                className={clsx(
                  'truncate text-sm font-semibold text-zinc-100 sm:text-base',
                  isCompact ? 'hidden sm:block' : 'block'
                )}
              >
                <span className="sm:hidden">資安筆記 / 專案</span>
                <span className="hidden sm:inline">資安筆記 / 專案 / 個人網站</span>
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4ade8029] bg-[#4ade800d] text-[#bbf7d0] transition hover:bg-[#4ade8016] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] lg:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="切換導航選單"
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <ul className="hidden items-center gap-1 text-sm font-medium lg:flex xl:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'inline-flex rounded-full px-3 py-2 font-semibold transition xl:px-4',
                      isActive
                        ? 'bg-[#4ade801f] text-[#a7f3d0] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.35)]'
                        : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <AnimatePresence initial={false}>
          {!isCompact && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              className="mt-3 hidden items-center gap-2 border-t border-[#4ade8016] pt-3 text-[0.72rem] text-zinc-400 lg:flex"
            >
              <TerminalSquare className="h-4 w-4 text-[#4ade80]" />
              <span className="mono">status: active / role: cybersecurity practitioner / notes online</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {isMobileOpen && (
            <motion.ul
              id="primary-navigation"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="mt-3 grid gap-2 border-t border-[#4ade8016] pt-3 text-sm font-medium lg:hidden"
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        'flex min-h-11 items-center rounded-xl px-4 py-3 font-semibold transition',
                        isActive
                          ? 'bg-[#4ade801f] text-[#a7f3d0] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.35)]'
                          : 'bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
