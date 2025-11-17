import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F12]/60 via-[#0F0F12]/70 to-[#0F0F12] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-10">
        <div className="text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs tracking-wide text-white/80">
              Web Developer • Python & Django • Kathmandu
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A6DFF] via-[#7A5CFF] to-[#43F2C8]">Aashutosh Thapa</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Passionate about crafting modern, performant, and user-centered web experiences. BCA 4th semester student at Milton International College.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl px-5 py-3 bg-[#3A6DFF] hover:bg-[#305de0] text-white transition shadow-lg shadow-[#3A6DFF]/20">View Projects</a>
              <a href="#contact" className="rounded-xl px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white transition">Contact Me</a>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block" />
      </div>

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div className="absolute top-24 left-8 h-10 w-10 rounded-xl bg-[#3A6DFF]/20 backdrop-blur-md border border-white/10" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute top-40 right-10 h-12 w-12 rounded-xl bg-[#7A5CFF]/20 backdrop-blur-md border border-white/10" animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity }} />
        <motion.div className="absolute bottom-24 left-1/3 h-8 w-8 rounded-xl bg-[#43F2C8]/20 backdrop-blur-md border border-white/10" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      </div>
    </section>
  )
}
