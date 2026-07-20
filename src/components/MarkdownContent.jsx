import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const allowedLinkProtocols = new Set(['http:', 'https:', 'mailto:', 'tel:'])
const allowedImageProtocols = new Set(['http:', 'https:'])

function isSafeUrl(value, allowedProtocols) {
  const url = String(value ?? '').trim()

  if (!url || /[\u0000-\u001F\u007F]/.test(url)) return false
  if (url.startsWith('#')) return true
  if (url.startsWith('/') && !url.startsWith('//')) return true

  try {
    return allowedProtocols.has(new URL(url).protocol)
  } catch (error) {
    return false
  }
}

export default function MarkdownContent({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      components={{
        a: ({ node, href, children: linkChildren, ...props }) => {
          if (!isSafeUrl(href, allowedLinkProtocols)) {
            return <span className="text-zinc-300">{linkChildren}</span>
          }

          return (
            <a
              {...props}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dd3fc] underline decoration-[#7dd3fc4d] underline-offset-4 transition hover:text-[#bae6fd] hover:decoration-[#7dd3fc]"
            >
              {linkChildren}
            </a>
          )
        },
        img: ({ node, src, alt = '', ...props }) => {
          if (!isSafeUrl(src, allowedImageProtocols)) return null

          return (
            <img
              {...props}
              src={src}
              alt={alt}
              loading="lazy"
              className="my-5 max-h-[560px] w-auto max-w-full rounded-lg border border-white/10"
            />
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
