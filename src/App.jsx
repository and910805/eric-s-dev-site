import React, { lazy, Suspense } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Certifications = lazy(() => import('./pages/Certifications.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Cv = lazy(() => import('./pages/Cv.jsx'))

function PageLoading() {
  return (
    <div className="glass-card mono text-sm text-[#bbf7d0]" role="status">
      $ loading page…
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-zinc-100 selection:bg-[#4ade8055] selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#4ade8010] blur-[120px]" />
        <div className="absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-[#67e8f910] blur-[130px]" />
        <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-[#4ade800e] blur-[140px]" />
      </div>

      <ScrollToTop />
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-44">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          >
            <Suspense fallback={<PageLoading />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Navigate to="/blog" replace />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/admin" element={<Navigate to="/blog" replace />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
