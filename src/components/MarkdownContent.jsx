import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export default function MarkdownContent({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ node, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer" className="text-[#8af7fe] underline" />
        ),
        img: ({ node, ...props }) => (
          <img
            {...props}
            loading="lazy"
            className="my-5 max-h-[560px] w-auto max-w-full rounded-lg border border-white/10"
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
