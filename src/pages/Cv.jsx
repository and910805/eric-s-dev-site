import React from 'react'
import { Download, ExternalLink, FileText } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const cvUrl = '/cv/eric-chuang-cv.pdf'

export default function Cv() {
  return (
    <>
      <SectionContainer subtitle="CV" title="$ open ~/cv/eric-chuang.pdf">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這裡放的是我目前的履歷版本，方便直接預覽、下載，或用新分頁開啟。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="glass-card overflow-hidden">
          <div className="glass-card__inner">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">Resume Preview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">莊冠霖 / Eric Chuang</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button terminal-button--primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  open pdf
                </a>
                <a href={cvUrl} download className="terminal-button terminal-button--ghost">
                  <Download className="h-4 w-4" />
                  download
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#39ff1420] bg-[#02070d]">
              <iframe
                src={cvUrl}
                title="Eric CV PDF"
                className="h-[72vh] min-h-[640px] w-full"
              />
            </div>
          </div>
        </section>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">File Info</p>
              <div className="space-y-3 rounded-2xl border border-[#39ff1420] bg-[#39ff1408] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#39ff1420] bg-white/5 text-zinc-100">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">eric-chuang-cv.pdf</p>
                    <p className="text-sm text-zinc-400">Portable resume file</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
