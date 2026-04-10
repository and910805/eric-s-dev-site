import React from 'react'
import { Download, ExternalLink, FileText } from 'lucide-react'
import TerminalPanel from '../components/TerminalPanel.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  const primaryCerts = certifications.filter((item) =>
    ['CEH', 'CEHP', 'CEH Master'].includes(item.shortTitle)
  )
  const secondaryCerts = certifications.filter((item) => !primaryCerts.includes(item))

  return (
    <>
      <SectionContainer subtitle="certifications" title="$ certctl list --verified">
        <TerminalPanel command="certctl status">
          <div className="space-y-1">
            <div className="terminal-row">
              <span className="terminal-key">primary</span>
              <span className="terminal-value">CEH / CEH Practical / CEH Master</span>
            </div>
            <div className="terminal-row">
              <span className="terminal-key">writing</span>
              <span className="terminal-value">iThome 2025 鐵人賽 30 篇文章</span>
            </div>
            <div className="terminal-row">
              <span className="terminal-key">purpose</span>
              <span className="terminal-value">把證照與文章都變成可以回頭查、可以延伸的學習紀錄。</span>
            </div>
          </div>
        </TerminalPanel>
      </SectionContainer>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="grid gap-5">
          {primaryCerts.map((item) => (
            <article key={item.title} className="glass-card">
              <div className="glass-card__inner">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">{item.issuer}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                  </div>
                  <span className="rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1 text-xs font-semibold text-[#b8ffb8]">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm leading-7 text-zinc-300">{item.summary}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-button terminal-button--primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    開啟證明
                  </a>
                  <a href={item.href} download className="terminal-button terminal-button--ghost">
                    <Download className="h-4 w-4" />
                    下載檔案
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">Preview</p>
              <h2 className="text-xl font-semibold text-white">CEH Master 證明預覽</h2>
              <a href="/certifications/ceh-master-certificate.png" target="_blank" rel="noopener noreferrer">
                <img
                  src="/certifications/ceh-master-certificate.png"
                  alt="CEH Master certificate preview"
                  className="w-full rounded-2xl border border-[#39ff1420] object-cover"
                />
              </a>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">Additional Proof</p>
              <h2 className="text-xl font-semibold text-white">其他紀錄</h2>
              <ul className="space-y-3">
                {secondaryCerts.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-[#39ff1420] bg-[#39ff1406] p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#39ff1420] bg-white/5 text-zinc-200">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="text-sm leading-6 text-zinc-400">{item.summary}</p>
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8af7fe] transition hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                          開啟紀錄
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
