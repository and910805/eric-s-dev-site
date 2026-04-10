import React from 'react'
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { contact } from '../data/contact.js'
import { serviceSiteUrl, services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <SectionContainer subtitle="Services" title="$ services">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            如果需要 Microsoft 365、ISO 27001 或網站開發相關協助，可以從這裡快速了解我能提供的服務範圍。
            這一頁保持簡潔，讓有需求的人能直接判斷是否適合合作。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="glass-card">
            <div className="glass-card__inner">
              <div className="space-y-3">
                <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">
                  $ {service.command}
                </p>
                <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                <p className="text-sm leading-7 text-zinc-300">{service.description}</p>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-zinc-200">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#39ff14]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-[1.25rem] border border-[#39ff1424] bg-[#39ff1408] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="space-y-3">
            <p className="mono text-xs uppercase tracking-[0.24em] text-[#8af7fe]">work inquiry</p>
            <h2 className="text-2xl font-semibold text-white">需要顧問或網站服務嗎？</h2>
            <p className="max-w-3xl text-sm leading-7 text-zinc-300">
              可以先從外包網站看服務介紹，也可以直接寄信討論需求、時程與合作方式。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={serviceSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button terminal-button--primary"
            >
              前往外包網站
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href={`mailto:${contact.email}`} className="terminal-button terminal-button--ghost">
              Email 聯絡
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
