import React from 'react'
import { motion } from 'framer-motion'

const reels = [
  { id: 1, src: 'https://images.unsplash.com/photo-1471005037502-e20d2b07c69b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaWtUb2slMjBSZWVsJTIwJUUyJTgwJTk0JTIwUHJvZHVjdCUyMERyb3B8ZW58MHwwfHx8MTc2MzUzNTY3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'TikTok Reel — Product Drop' },
  { id: 2, src: 'https://images.unsplash.com/photo-1471005037502-e20d2b07c69b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaWtUb2slMjBSZWVsJTIwJUUyJTgwJTk0JTIwUHJvZHVjdCUyMERyb3B8ZW58MHwwfHx8MTc2MzUzNTY3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'IG Story — BTS' },
  { id: 3, src: 'https://images.unsplash.com/photo-1471005037502-e20d2b07c69b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaWtUb2slMjBSZWVsJTIwJUUyJTgwJTk0JTIwUHJvZHVjdCUyMERyb3B8ZW58MHwwfHx8MTc2MzUzNTY3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Campaign Cut — Culture' },
]

const thumbs = [
  'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975673310-44e0d66ca9a2?q=80&w=900&auto=format&fit=crop',
]

export default function Showcase() {
  return (
    <section id="work" className="relative overflow-hidden bg-gradient-to-b from-white to-transparent py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(255,182,193,0.3),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Social media, but make it art.</h2>
            <p className="mt-3 text-slate-600">High-impact reels, vertical stories and snackable content that actually performs. 🚀</p>
          </div>
          <div className="hidden md:flex gap-6 text-center">
            <Stat label="Monthly Views" value="86M" />
            <Stat label="Avg. Engagement" value="8.3%" />
            <Stat label="Creator Network" value="2.1k" />
          </div>
        </div>

        {/* TikTok-style vertical carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reels.map((r, i) => (
            <motion.div key={r.id} whileHover={{ y: -6 }} className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black/10 backdrop-blur-xl border border-white/50">
              <video src={r.src} autoPlay muted loop playsInline className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-block rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-800">{r.caption}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thumbnail grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {thumbs.map((t, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.04 }} className="overflow-hidden rounded-2xl shadow-lg shadow-pink-200/30">
              <img src={t} alt="thumb" className="h-32 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 px-6 py-4 shadow">
      <div className="text-2xl font-black text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  )
}
