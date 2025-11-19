import React from 'react'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import CreatorUGC from './components/CreatorUGC'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-purple-50/30 text-slate-800">
      {/* global floating emojis */}
      <div className="pointer-events-none fixed inset-0 z-10 mix-blend-screen opacity-80">
        <div className="absolute left-[10%] top-[20%] text-5xl animate-[float_6s_ease-in-out_infinite]">✨</div>
        <div className="absolute right-[15%] top-[30%] text-4xl animate-[float_7s_ease-in-out_infinite]">💫</div>
        <div className="absolute left-[20%] bottom-[15%] text-4xl animate-[float_8s_ease-in-out_infinite]">🌈</div>
      </div>

      <Hero />
      <Showcase />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Stats />
      <CreatorUGC />
      <About />
      <Contact />

      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600">© {new Date().getFullYear()} OOB — Our Own Brand. London.</div>
          <a href="#contact" className="rounded-full bg-slate-900 text-white px-5 py-2">Let’s build something</a>
        </div>
      </footer>
    </div>
  )
}

export default App
