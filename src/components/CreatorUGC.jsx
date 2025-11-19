import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function CreatorUGC() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(252,165,165,0.35),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Join the OOB Creator Collective</h2>
            <p className="mt-3 text-slate-600">UGC-native creators, editors, motion designers and meme lords — we see you. 📱✨</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="rounded-full bg-slate-900 text-white px-6 py-3 text-base shadow-lg">Apply now</a>
              <a href="#" className="rounded-full bg-white/70 border border-white/60 px-6 py-3 text-base text-slate-900 backdrop-blur">See briefs</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="aspect-[9/16] rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center text-6xl">📱</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
