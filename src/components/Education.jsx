import { motion } from 'framer-motion'

const items = [
  {
    period: 'Present',
    title: 'BCA - 4th Semester',
    place: 'Milton International College, New Baneshwor, Kathmandu',
    details: 'Core CS concepts, data structures, web development, and Python/Django focus.'
  },
  {
    period: '2022',
    title: 'Higher Secondary Education (+2)',
    place: 'Kathmandu',
    details: 'Science stream with focus on mathematics and computer fundamentals.'
  }
]

export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3A6DFF] via-[#7A5CFF] to-[#43F2C8]" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <div className="absolute -left-[9px] top-5 h-4 w-4 rounded-full bg-[#3A6DFF] ring-4 ring-[#3A6DFF]/20" />
                <div className="text-white font-medium">{it.title}</div>
                <div className="text-white/70 text-sm">{it.place}</div>
                <div className="text-white/60 text-xs mt-1">{it.period}</div>
                <p className="text-white/80 text-sm mt-3">{it.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
