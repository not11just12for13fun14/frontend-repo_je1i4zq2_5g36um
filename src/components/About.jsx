import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_20%_0%,rgba(221,214,254,0.5),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">About OOB</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">We’re a London studio building social-first brands. We blend strategy with creator-native craft — think trend-spotting, meme fluency and premium motion. We care about culture more than calendars, and performance more than presentations.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Culture-led','Creator-native','Performance-built'].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-xl">
              <div className="text-2xl font-black text-slate-900">{t}</div>
              <p className="mt-2 text-slate-600">We turn insights into scroll-stopping stories with a glow.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
