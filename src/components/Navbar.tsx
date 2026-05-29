import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6" aria-label="Primary navigation">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0d12]/72 px-4 shadow-2xl shadow-black/35 backdrop-blur-2xl">
        <a href="#home" className="focus-ring rounded-xl text-sm font-semibold tracking-tight text-white" aria-label="Madhav Wadhwana home">
          Madhav<span className="text-cyan-200">.AI</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-4 py-2 text-sm transition ${active === item.href.slice(1) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="mailto:madhaavv01@gmail.com" className="focus-ring hidden min-h-11 items-center rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 text-sm text-cyan-100 transition hover:bg-cyan-200/15 md:inline-flex">
          Start a build
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-2xl border border-white/10 bg-[#0b0d12]/92 p-2 backdrop-blur-2xl md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring min-h-11 rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/[0.07]">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
