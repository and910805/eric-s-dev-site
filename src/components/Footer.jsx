import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-[0.8rem] text-zinc-400 py-8 text-center max-w-6xl mx-auto px-4 sm:px-8">
      <div className="mb-2 font-medium text-zinc-300">
        Eric&apos;s Dev Portfolio
      </div>
      <div className="text-zinc-500">
        © {new Date().getFullYear()} Eric. All rights reserved.
      </div>
    </footer>
  )
}
