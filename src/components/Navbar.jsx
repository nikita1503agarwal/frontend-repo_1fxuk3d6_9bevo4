import { useEffect, useState } from 'react'
import { Menu, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 dark:bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#3A6DFF] to-[#7A5CFF] shadow-lg" />
              <span className="font-semibold tracking-tight text-white">Aashutosh<span className="text-[#43F2C8]">.</span></span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map(it => (
                <a key={it.href} href={it.href} className="text-white/80 hover:text-white transition-colors">
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a className="hidden sm:inline-flex p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition" href="mailto:aashutosh@example.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a className="hidden sm:inline-flex p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a className="hidden sm:inline-flex p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <button onClick={toggleTheme} className="p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5" onClick={() => setOpen(!open)} aria-label="Menu">
                <Menu size={18} />
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map(it => (
                <a key={it.href} href={it.href} className="block rounded-xl px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/90" onClick={() => setOpen(false)}>
                  {it.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
