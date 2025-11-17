import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-3 text-white/80">
              I'm a web developer from Kathmandu with a strong foundation in HTML, CSS, JavaScript, and Python/Django. I love building clean, accessible interfaces and bringing ideas to life on the web.
            </p>
            <p className="mt-3 text-white/80">
              Currently pursuing a BCA degree (4th semester) at Milton International College, New Baneshwor. Outside code, I enjoy exploring UI design trends and learning new tools that enhance developer experience.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#3A6DFF]/15 via-[#7A5CFF]/10 to-[#43F2C8]/15 backdrop-blur-md p-6">
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10" />
            <p className="mt-4 text-white/70 text-sm">3D avatar/illustration placeholder - integrated in hero via Spline.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
