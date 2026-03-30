import React from 'react'
import { ExternalLink, Terminal } from 'lucide-react'

const footerLinks = [
  {
    label: 'iThome 鐵人賽系列',
    href: 'https://ithelp.ithome.com.tw/users/20171891/ironman/8352',
  },
  {
    label: '資安筆記網站',
    href: 'https://and910805.github.io/eric_site/',
  },
  {
    label: 'HackMD 筆記',
    href: 'https://hackmd.io/@LKanFpXQTUSJayug7EHeiA',
  },
]

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 py-8 text-[0.85rem] text-zinc-400 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 border-t border-[#39ff1418] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="mono flex items-center gap-2 text-zinc-100">
            <Terminal className="h-4 w-4 text-[#39ff14]" />
            Eric Security Portfolio
          </div>
          <div>cybersecurity / certifications / automation / technical output</div>
        </div>

        <ul className="flex flex-wrap gap-3 text-zinc-300">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-[#b8ffb8]"
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
