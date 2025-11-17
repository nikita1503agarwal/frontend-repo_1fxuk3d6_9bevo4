import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio with 3D hero, glassmorphism, and smooth animations.',
    tech: ['React', 'Tailwind', 'Spline'],
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Django Blog',
    description: 'Full-stack blog with authentication, markdown editor, and SEO friendly URLs.',
    tech: ['Django', 'PostgreSQL', 'HTMX'],
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'JS Playground',
    description: 'Interactive JavaScript components and micro-interactions collection.',
    tech: ['JavaScript', 'Vite'],
    github: 'https://github.com/',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:shadow-xl hover:shadow-[#3A6DFF]/10 transition">
              <div className="aspect-video bg-gradient-to-br from-[#3A6DFF]/20 via-[#7A5CFF]/15 to-[#43F2C8]/20" />
              <div className="p-5">
                <div className="text-white font-medium">{p.title}</div>
                <p className="text-white/70 text-sm mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
