import React, { useEffect, useState } from 'react'
import clsx from 'classnames'
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
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed left-1/2 top-4 z-40 w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2">
      <nav className="rounded-[1.15rem] border border-[#4ade8029] bg-[#030a10e3] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3 text-white">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#4ade8050] bg-[radial-gradient(circle_at_top,#10321f_0%,#06110d_62%,#03070a_100%)] shadow-[0_0_12px_rgba(74,222,128,0.12)]">
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(74,222,128,0.1)_48%,transparent_52%,transparent_100%)] opacity-80" />
              <span className="pointer-events-none absolute inset-x-1 top-1 h-px bg-[#7dd3fc]/70" />
              <span className="mono relative text-sm font-bold tracking-[-0.12em] text-[#86efac]">
                &gt;_
              </span>
            </span>
            <span className="min-w-0">
              <span className="mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
                Eric / Security Terminal
              </span>
              <span className="block truncate text-sm font-semibold text-zinc-100 sm:text-base">
                資安筆記 / 專案 / 個人網站
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#4ade8029] bg-[#4ade800d] p-2 text-[#bbf7d0] transition hover:bg-[#4ade8016] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] sm:hidden"
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

        <div className="mt-3 hidden items-center gap-2 border-t border-[#4ade8016] pt-3 text-[0.72rem] text-zinc-400 lg:flex">
          <TerminalSquare className="h-4 w-4 text-[#4ade80]" />
          <span className="mono">status: active / role: cybersecurity practitioner / notes online</span>
        </div>

        <ul
          id="primary-navigation"
          className={clsx(
            'mt-3 grid gap-2 border-t border-[#4ade8016] pt-3 text-sm font-medium lg:hidden',
            isMobileOpen ? 'grid' : 'hidden'
          )}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'block rounded-xl px-4 py-3 font-semibold transition',
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
        </ul>
      </nav>
    </header>
  )
}
