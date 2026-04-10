export async function fetchBlogPosts() {
  const response = await fetch('/api/blog/posts')
  if (!response.ok) throw new Error('Blog API unavailable')
  const data = await response.json()
  return data.posts
}

export async function fetchBlogPost(slug) {
  const response = await fetch(`/api/blog/posts/${slug}`)
  if (!response.ok) throw new Error('Blog post unavailable')
  const data = await response.json()
  return data.post
}

export async function fetchBlogComments(slug) {
  const response = await fetch(`/api/blog/posts/${slug}/comments`)
  if (!response.ok) throw new Error('Comments API unavailable')
  const data = await response.json()
  return data.comments
}

export async function createBlogComment(slug, comment) {
  const response = await fetch(`/api/blog/posts/${slug}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  })

  if (!response.ok) throw new Error('Unable to submit comment')

  const data = await response.json()
  return data.comment
}

export async function createBlogPost(post, credentials) {
  const response = await fetch('/api/blog/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa(`${credentials.username}:${credentials.password}`)}`,
    },
    body: JSON.stringify(post),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.error ?? 'Unable to save post')
  }

  const data = await response.json()
  return data.post
}
