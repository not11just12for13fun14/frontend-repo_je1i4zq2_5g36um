import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles, ArrowRight } from 'lucide-react'
import React from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -80])
  const y2 = useTransform(scrollY, [0, 600], [0, -40])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])

  return (
    <section className="relative h-[100svh] overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* ethereal gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] mix-blend-screen" />

      {/* floating glow orbs */}
      <motion.div style={{ y: y1, opacity }} className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/60 via-orange-300/50 to-purple-300/50 blur-3xl" />
      <motion.div style={{ y: y2, opacity }} className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/60 via-purple-300/50 to-pink-300/50 blur-3xl" />

      {/* content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(136,84,208,0.2)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-2 text-sm text-slate-700 shadow-inner">
              <Sparkles className="h-4 w-4" />
              <span>OOB — Our Own Brand • London</span>
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900">
              Social-first. Dreamy. Unapologetically OOB.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-700">
              An award-winning social media agency crafting culture-shifting content, creator-led campaigns and brands with a glow. ✨
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-base shadow-lg shadow-slate-900/20 transition hover:shadow-slate-900/30">
                See the work
                <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md text-slate-900 px-6 py-3 text-base border border-white/40 hover:bg-white/70 transition">
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
