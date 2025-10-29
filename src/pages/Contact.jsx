import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import { contact } from '../data/contact.js'
import { Github, Mail, MessageCircle, MapPin } from 'lucide-react'

const InfoRow = ({ icon: Icon, label, value, href }) => (
  <a
    href={href ?? '#'}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
    className="group glass-card block text-zinc-200 transition-colors duration-300 hover:text-white"
  >
    <div className="relative z-[1] flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blush-pink/30 to-soft-gold/30 text-white shadow-[0_12px_30px_rgba(253,225,232,0.35)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1 text-sm">
        <span className="font-semibold text-white">{label}</span>
        <span className="block text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 break-all">
          {value}
        </span>
      </div>
    </div>
  </a>
)

export default function Contact() {
  return (
    <>
      <SectionContainer subtitle="Get in touch" title="聯絡資訊">
        <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
          你可以直接用下面的方式找到我（Email / GitHub / LINE）。
          我平常有在做自由接案 / 內部系統開發 / 資安工具客製。
        </p>
      </SectionContainer>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoRow
          icon={Mail}
          label="Email"
          value={contact.email}
          href={"mailto:" + contact.email}
        />

        <InfoRow
          icon={Github}
          label="GitHub"
          value={contact.githubUsername}
          href={"https://github.com/" + contact.githubUsername}
        />

        <InfoRow icon={MessageCircle} label="LINE" value={contact.lineId} />
        <InfoRow
          icon={MapPin}
          label="Base / Location"
          value={contact.location}
        />
      </div>
    </>
  )
}
