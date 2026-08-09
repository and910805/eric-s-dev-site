function plainHeadingText(value) {
  return String(value ?? '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/<[^>]+>/g, '')
    .trim()
}

export function slugifyHeading(value) {
  const slug = plainHeadingText(value)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '')

  return slug || 'section'
}

export function createHeadingId(value, counts) {
  const base = slugifyHeading(value)
  const count = counts.get(base) ?? 0
  counts.set(base, count + 1)
  return count === 0 ? base : `${base}-${count + 1}`
}

export function stripLeadingMarkdownTitle(markdown) {
  const source = String(markdown ?? '')
  const match = source.match(/^\s*#\s+.+?\s*(?:\r?\n|$)/)

  if (!match) return source

  return source.slice(match[0].length).replace(/^\s*\r?\n/, '')
}

export function extractMarkdownHeadings(markdown) {
  const counts = new Map()
  const headings = []
  const headingPattern = /^(##|###)\s+(.+?)\s*#*\s*$/gm
  let match

  while ((match = headingPattern.exec(String(markdown ?? ''))) !== null) {
    const text = plainHeadingText(match[2])
    if (!text) continue

    headings.push({
      id: createHeadingId(text, counts),
      level: match[1].length,
      text,
    })
  }

  return headings
}
