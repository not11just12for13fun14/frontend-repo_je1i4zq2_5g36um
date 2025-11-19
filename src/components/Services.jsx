import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Palette, Share2, DollarSign, Users, Sparkles } from 'lucide-react'

const services = [
  {
    key: 'social',
    icon: Share2,
    title: 'Social',
    blurb: 'Strategy, content calendars, community, paid — built for scroll culture.',
    details: [
      'Social strategy & positioning',
      'Always-on content calendars',
      'Community management',
      'Paid social & performance',
      'Influencer partnerships',
    ],
  },
  {
    key: 'branding',
    icon: Palette,
    title: 'Branding',
    blurb: 'Visual identity systems that glow across every touchpoint.',
    details: [
      'Brand strategy & tone',
      'Visual identity & design systems',
      'Motion guidelines',
      'Content templates',
    ],
  },
  {
    key: 'production',
    icon: Camera,
    title: 'Production',
    blurb: 'Creator-native shoots, studio productions, and UGC at scale.',
    details: [
      'UGC sourcing & management',
      'Studio & location shoots',
      'Post-production & motion',
      'Asset management',
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState('social')

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(147,197,253,0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Social • Branding • Production</h2>
          <div className="hidden md:flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-700 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Motion-led UI
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ key, icon: Icon, title, blurb }) => (
            <motion.button
              key={key}
              onClick={() => setActive(key)}
              whileHover={{ y: -4 }}
              className={`text-left rounded-3xl border px-6 py-8 backdrop-blur-xl shadow-lg transition ${
                active === key
                  ? 'bg-white/70 border-white/60 shadow-pink-200/40'
                  : 'bg-white/40 border-white/50 hover:bg-white/60'
              }`}
            >
              <Icon className="h-8 w-8 text-slate-800" />
              <div className="mt-4 text-2xl font-extrabold text-slate-900">{title}</div>
              <p className="mt-2 text-slate-600">{blurb}</p>
            </motion.button>
          ))}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {services.map((s) => (
              s.key === active && (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-3xl border border-white/60 bg-white/70 p-6 md:p-10 backdrop-blur-xl shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      {s.details.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-1">
                      <div className="rounded-2xl bg-white/70 p-6 backdrop-blur">
                        <div className="text-5xl font-black text-slate-900">8.3%</div>
                        <div className="text-slate-600">Average engagement across hero campaigns</div>
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                          <Pill label="+86M views" />
                          <Pill label="2.1k creators" />
                          <Pill label="< 6s hook" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Pill({ label }) {
  return (
    <div className="rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 shadow border border-white/50">{label}</div>
  )
}
