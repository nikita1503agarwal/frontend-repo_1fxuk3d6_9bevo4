import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send message')
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Contact</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <p className="text-white/80">Have an idea or a project in mind? Let's build it together.</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3A6DFF]" />
                <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3A6DFF]" />
              </div>
              <input name="subject" placeholder="Subject (optional)" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3A6DFF]" />
              <textarea name="message" required rows="5" placeholder="Message" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3A6DFF]" />
              <div className="flex items-center gap-3">
                <button disabled={loading} className="rounded-xl px-5 py-3 bg-[#3A6DFF] hover:bg-[#305de0] text-white transition disabled:opacity-50">{loading ? 'Sending...' : 'Send Message'}</button>
                {status && (
                  <span className={status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}>
                    {status.message}
                  </span>
                )}
              </div>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#3A6DFF]/15 via-[#7A5CFF]/10 to-[#43F2C8]/15 backdrop-blur-md p-6">
            <div className="space-y-2 text-white/80">
              <p>Email: aashutosh@example.com</p>
              <p>Location: New Baneshwor, Kathmandu</p>
              <div className="flex gap-3 pt-2">
                <a className="text-white/80 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-white/80 hover:text-white" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-white/80 hover:text-white" href="mailto:aashutosh@example.com">Email</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
