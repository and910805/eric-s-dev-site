import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, FileText, Folder, FolderOpen, Terminal } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'
import { blogCategories, blogPosts } from '../data/blog.js'
import { fetchBlogPosts } from '../lib/blogApi.js'

function getArticleDirectory(post) {
  if (post.categorySlug === 'ithome-2025-ironman') {
    const day = Number(post.slug.match(/day-(\d+)/)?.[1] ?? 0)

    if (day <= 10) return 'day-01-10'
    if (day <= 20) return 'day-11-20'
    return 'day-21-30'
  }

  return post.date?.slice(0, 4) ?? 'misc'
}

function buildTree(posts) {
  const blogTree = blogCategories
    .map((category) => {
      const categoryPosts = posts
        .filter((post) => post.categorySlug === category.slug)
        .sort((a, b) => b.date.localeCompare(a.date))

      if (!categoryPosts.length) return null

      const directories = categoryPosts.reduce((groups, post) => {
        const directory = getArticleDirectory(post)
        groups[directory] = groups[directory] ?? []
        groups[directory].push(post)
        return groups
      }, {})

      return {
        ...category,
        count: categoryPosts.length,
        directories: Object.entries(directories)
          .map(([name, items]) => ({ name, items }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      }
    })
    .filter(Boolean)

  return [
    ...blogTree,
    {
      slug: 'external-links',
      name: '外部文章連結',
      count: articles.length,
      directories: [
        {
          name: 'hackmd-and-ithome',
          items: articles.map((article) => ({
            ...article,
            slug: article.href,
            date: article.platform,
            readTime: article.category,
            external: true,
          })),
        },
      ],
    },
  ]
}

export default function Blog() {
  const [posts, setPosts] = useState(blogPosts)
  const [openCategories, setOpenCategories] = useState({})
  const [openDirectories, setOpenDirectories] = useState({})

  useEffect(() => {
    fetchBlogPosts()
      .then((apiPosts) => {
        if (apiPosts.length) setPosts(apiPosts)
      })
      .catch(() => {})
  }, [])

  const tree = useMemo(() => buildTree(posts), [posts])
  const totalPosts = tree.reduce((total, category) => total + category.count, 0)

  function toggleCategory(slug) {
    setOpenCategories((current) => ({ ...current, [slug]: !current[slug] }))
  }

  function toggleDirectory(key) {
    setOpenDirectories((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <section className="space-y-10">
      <SectionContainer subtitle="Blog" title="資安筆記" />

      <section className="terminal-tree rounded-2xl border border-[#39ff1424] bg-[#02070df5] shadow-[0_18px_70px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-4 border-b border-[#39ff1424] px-5 py-4">
          <div className="mono text-xs text-zinc-500">eric@portfolio:~/blog</div>
        </div>

        <div className="space-y-5 p-5 sm:p-7">
          <div className="mono flex flex-wrap items-center gap-2 text-sm text-[#b8ffb8]">
            <Terminal className="h-4 w-4 text-[#39ff14]" />
            <span className="text-[#39ff14]">$</span>
            <span>tree ~/blog --interactive</span>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5">
            <div className="mono mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <span>~/blog</span>
              <span>{tree.length} directories, {totalPosts} articles</span>
            </div>

            <div className="space-y-2">
              {tree.map((category, categoryIndex) => {
                const categoryOpen = Boolean(openCategories[category.slug])
                const isLastCategory = categoryIndex === tree.length - 1

                return (
                  <div key={category.slug} className="mono text-sm">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.slug)}
                      className="group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-100 transition hover:bg-[#39ff1408] hover:text-white"
                    >
                      <span className="w-5 text-zinc-500">{isLastCategory ? '└──' : '├──'}</span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#39ff14] transition ${categoryOpen ? 'rotate-90' : ''}`}
                      />
                      {categoryOpen ? (
                        <FolderOpen className="h-4 w-4 text-[#8af7fe]" />
                      ) : (
                        <Folder className="h-4 w-4 text-[#8af7fe]" />
                      )}
                      <span className="font-semibold">{category.name}</span>
                      <span className="ml-auto rounded-full border border-white/10 px-2 py-0.5 text-[0.68rem] text-zinc-500">
                        {category.count}
                      </span>
                    </button>

                    {categoryOpen && (
                      <div className="ml-6 space-y-1 border-l border-[#39ff141f] pl-4">
                        {category.directories.map((directory, directoryIndex) => {
                          const directoryKey = `${category.slug}/${directory.name}`
                          const directoryOpen = Boolean(openDirectories[directoryKey])
                          const isLastDirectory = directoryIndex === category.directories.length - 1

                          return (
                            <div key={directoryKey}>
                              <button
                                type="button"
                                onClick={() => toggleDirectory(directoryKey)}
                                className="group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-200 transition hover:bg-[#3df2ff0a] hover:text-white"
                              >
                                <span className="w-5 text-zinc-600">{isLastDirectory ? '└──' : '├──'}</span>
                                <ChevronRight
                                  className={`h-4 w-4 text-[#8af7fe] transition ${directoryOpen ? 'rotate-90' : ''}`}
                                />
                                {directoryOpen ? (
                                  <FolderOpen className="h-4 w-4 text-[#39ff14]" />
                                ) : (
                                  <Folder className="h-4 w-4 text-[#39ff14]" />
                                )}
                                <span>{directory.name}</span>
                                <span className="ml-auto text-[0.68rem] text-zinc-600">{directory.items.length} files</span>
                              </button>

                              {directoryOpen && (
                                <div className="ml-6 space-y-1 border-l border-[#3df2ff1f] pl-4">
                                  {directory.items.map((post, postIndex) => {
                                    const isLastPost = postIndex === directory.items.length - 1

                                    return post.external ? (
                                      <a
                                        key={post.slug}
                                        href={post.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#39ff1408] hover:text-white"
                                      >
                                        <span className="mt-0.5 w-5 text-zinc-700">{isLastPost ? '└──' : '├──'}</span>
                                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#8af7fe]" />
                                        <span className="min-w-0 flex-1">
                                          <span className="block truncate">{post.title}.url</span>
                                          <span className="mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400">
                                            {post.date} / {post.readTime}
                                          </span>
                                        </span>
                                      </a>
                                    ) : (
                                      <Link
                                        key={post.slug}
                                        to={`/blog/${post.slug}`}
                                        className="group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#39ff1408] hover:text-white"
                                      >
                                        <span className="mt-0.5 w-5 text-zinc-700">{isLastPost ? '└──' : '├──'}</span>
                                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#39ff14]" />
                                        <span className="min-w-0 flex-1">
                                          <span className="block truncate">{post.title}.md</span>
                                          <span className="mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400">
                                            {post.date} / {post.readTime}
                                          </span>
                                        </span>
                                      </Link>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <p className="mono text-xs leading-6 text-zinc-500">
            hint: click a directory to expand it, then open a markdown file to read the article.
          </p>
        </div>
      </section>
    </section>
  )
}
