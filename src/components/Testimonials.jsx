import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sofia, CMO @ GlowLab',
    text: 'They just get internet culture. Our content finally feels alive — and it performs.',
  },
  {
    name: 'Ben, Founder @ CityCycle',
    text: 'From strategy to execution, OOB are rapid, thoughtful and creative to the core.',
  },
  {
    name: 'Maya, Head of Social @ FreshCo',
    text: 'Creator-first thinking with premium craft. The sweet spot we were missing.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_80%_0%,rgba(147,197,253,0.35),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">People are talking</h2>
        <p className="mt-3 text-slate-600">Floating thoughts from brands we love working with. 💬</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-xl"
            >
              <p className="text-slate-800">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-600">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
