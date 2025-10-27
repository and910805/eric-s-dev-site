import React from 'react'
import SectionContainer from '../components/SectionContainer.jsx'
import { contact } from '../data/contact.js'
import { Github, Mail, MessageCircle, MapPin } from 'lucide-react'

const InfoRow = ({ icon: Icon, label, value, href }) => (
  <a
    href={href ?? '#'}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
    className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 backdrop-blur-xl hover:bg-white/10 hover:text-white transition"
  >
    <div className="rounded-lg bg-gradient-to-br from-blush-pink/20 to-soft-gold/20 p-2 text-soft-gold shadow-glow-pink">
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col text-sm">
      <span className="font-medium text-white">{label}</span>
      <span className="text-zinc-400 group-hover:text-zinc-200 break-all">
        {value}
      </span>
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

      <div className="grid gap-4 sm:grid-cols-2">
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
