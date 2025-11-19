import React, { useEffect, useState } from 'react'

function useCounter(target, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [target, duration])
  return value
}

export default function Stats() {
  const views = useCounter(86)
  const creators = useCounter(2100)
  const engagement = useCounter(83)

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_80%_0%,rgba(252,231,243,0.5),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white/70 p-10 backdrop-blur-xl border border-white/60 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-slate-900">{views}M</div>
              <div className="text-slate-600">Monthly Views</div>
            </div>
            <div>
              <div className="text-5xl font-black text-slate-900">{engagement/10}%</div>
              <div className="text-slate-600">Avg. Engagement</div>
            </div>
            <div>
              <div className="text-5xl font-black text-slate-900">{creators.toLocaleString()}</div>
              <div className="text-slate-600">Creator Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
