import React from 'react'
import { ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'

export default function Articles() {
  return (
    <>
      <SectionContainer subtitle="Articles" title="文章專區">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這一區集中整理你的筆記、考試心得與系列文章。相較於專案區，文章專區更能體現你持續學習、整理知識與對外輸出的能力。
          </p>
          <p>
            我把內容分成證照筆記、實戰心得、CTF 筆記與鐵人賽系列，讓訪客可以快速理解你的學習深度與技術主題。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.href} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">
                    {article.platform}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{article.title}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
                  {article.platform === 'iThome' ? (
                    <ShieldCheck className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                </div>
              </div>

              <div className="inline-flex w-fit rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1 text-xs font-semibold text-[#b8ffb8]">
                {article.category}
              </div>

              <p className="text-sm leading-7 text-zinc-300">{article.description}</p>

              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button--ghost mt-auto w-fit"
              >
                開啟文章
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
