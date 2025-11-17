import { motion } from 'framer-motion'
import { Code, FileCode, Braces, Boxes, Rocket } from 'lucide-react'

const skills = [
  { name: 'HTML', level: 'Advanced', color: '#FF6B6B', icon: Code },
  { name: 'CSS', level: 'Advanced', color: '#3A6DFF', icon: FileCode },
  { name: 'JavaScript', level: 'Intermediate', color: '#F5DE19', icon: Braces },
  { name: 'Python', level: 'Advanced', color: '#3776AB', icon: Boxes },
  { name: 'Django', level: 'Intermediate', color: '#092E20', icon: Rocket },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl" style={{ background: `${s.color}33` }} />
                <div>
                  <div className="text-white font-medium">{s.name}</div>
                  <div className="text-white/60 text-sm">{s.level}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
