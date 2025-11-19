import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    brand: 'GlowLab',
    kpi: ['+12.4M Views', '9.1% ER', 'CPV £0.01'],
    video: 'https://videos.pexels.com/video-files/6745722/6745722-uhd_2560_1440_25fps.mp4',
    before: 'https://images.unsplash.com/photo-1520975673310-44e0d66ca9a2?q=80&w=1200&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&auto=format&fit=crop',
    quote: 'OOB turned our TikTok into a growth engine. Smart, fast, culture-first.',
  },
  {
    brand: 'CityCycle',
    kpi: ['+8.6M Views', '7.7% ER', 'CTR +42%'],
    video: 'https://videos.pexels.com/video-files/4666070/4666070-uhd_2560_1440_24fps.mp4',
    before: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1200&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    quote: 'Content that finally converts. The storytelling is elite.',
  },
]

export default function CaseStudies() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_0%,rgba(216,180,254,0.35),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Case Studies</h2>
        <p className="mt-3 text-slate-600">Swipeable stories. Big KPIs. Smooth, narrative-first transitions.</p>

        <div className="mt-10 space-y-16">
          {cases.map((c, idx) => (
            <article key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl">
                <video src={c.video} autoPlay muted loop playsInline className="h-80 w-full object-cover" />
                <div className="p-6 flex flex-wrap gap-3">
                  {c.kpi.map((k) => (
                    <span key={k} className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 border border-white/50">{k}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="space-y-4">
                <div className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm text-slate-700 border border-white/50">{c.brand}</div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Before → After</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={c.before} alt="before" className="h-40 w-full object-cover" />
                    <div className="mt-2 text-sm text-slate-600">Before</div>
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img src={c.after} alt="after" className="h-40 w-full object-cover" />
                    <div className="mt-2 text-sm text-slate-600">After</div>
                  </div>
                </div>
                <blockquote className="rounded-2xl bg-white/60 p-6 backdrop-blur border border-white/50 text-slate-700">“{c.quote}”</blockquote>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
