import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-blush-pink/40 selection:text-white">
      {/* background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-blush-pink/40 via-soft-gold/20 to-transparent blur-[120px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-soft-gold/30 via-transparent to-blush-pink/20 blur-[140px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 sm:px-8 max-w-6xl w-full mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
