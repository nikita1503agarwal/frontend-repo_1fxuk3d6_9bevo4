import { motion } from 'framer-motion'
import { Layout, Palette, Code2, Server } from 'lucide-react'

const services = [
  { icon: Layout, title: 'Responsive Web Design', desc: 'Pixel-perfect layouts with a strong UX focus.' },
  { icon: Palette, title: 'UI Engineering', desc: 'Design systems, components, and micro-interactions.' },
  { icon: Code2, title: 'Frontend Development', desc: 'Modern React stack with performance in mind.' },
  { icon: Server, title: 'Python & Django', desc: 'Robust backends, APIs, and integrations.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <s.icon size={18} className="text-white" />
              </div>
              <div className="mt-3 text-white font-medium">{s.title}</div>
              <p className="text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
