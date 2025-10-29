import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-[0.8rem] text-zinc-400 py-8 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <div className="font-medium text-zinc-200">Eric&apos;s Dev Portfolio</div>
          <div className="text-zinc-500">© {new Date().getFullYear()} Eric. All rights reserved.</div>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-3 text-zinc-300 sm:justify-end">
          {[{
            label: 'iThome 鐵人賽紀錄',
            href: 'https://ithelp.ithome.com.tw/users/20171891/ironman/8352',
          },
          {
            label: 'Eric’s InfoSec Site',
            href: 'https://and910805.github.io/eric_site/',
          },
          {
            label: 'HackMD 技術筆記',
            href: 'https://hackmd.io/@LKanFpXQTUSJayug7EHeiA',
          }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
