import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-[0.8rem] text-zinc-400 py-8 text-center max-w-6xl mx-auto px-4 sm:px-8">
      <div className="mb-2 font-medium text-zinc-300">
        Eric&apos;s Dev Portfolio
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-3 text-zinc-400">
        <a
          href="https://ithelp.ithome.com.tw/users/20171891/ironman/8352"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-3 py-1.5 text-zinc-400 transition hover:border-white/30 hover:text-white"
        >
          iThome 鐵人賽紀錄
        </a>
        <a
          href="https://and910805.github.io/eric_site/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-3 py-1.5 text-zinc-400 transition hover:border-white/30 hover:text-white"
        >
          Eric’s InfoSec Site
        </a>
        <a
          href="https://hackmd.io/@LKanFpXQTUSJayug7EHeiA"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-3 py-1.5 text-zinc-400 transition hover:border-white/30 hover:text-white"
        >
          HackMD 技術筆記
        </a>
      </div>
      <div className="text-zinc-500">
        © {new Date().getFullYear()} Eric. All rights reserved.
      </div>
    </footer>
  )
}
