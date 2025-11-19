import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(191,219,254,0.5),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-8 md:p-10 backdrop-blur-xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Work with us</h2>
          <p className="mt-2 text-slate-600">Tell us about your brand, your goals and the glow you’re chasing ✨</p>
          <form className="mt-6 grid grid-cols-1 gap-4">
            <input className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Your name" />
            <input className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Brand / Company" />
            <input className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Email" type="email" />
            <textarea className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="What are you looking to create?" rows={5} />
            <button type="submit" className="rounded-full bg-slate-900 text-white px-6 py-3 text-base shadow-lg self-start">Send ✉️</button>
          </form>
        </div>
      </div>
    </section>
  )
}
