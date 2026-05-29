import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteLinks } from '../config/site'

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
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-900/10 bg-[#fff8ea]/82 px-3 py-3 backdrop-blur-xl" aria-label="Primary navigation">
      <nav className="mx-auto flex min-h-14 max-w-7xl items-center justify-between">
        <a href="#home" className="focus-ring inline-flex items-center gap-2 rounded-lg font-mono text-sm font-bold uppercase tracking-tight text-stone-950" aria-label="Madhav Wadhwana home">
          <span className="text-amber-600">△</span> Madhav <span className="text-stone-400">·</span> AI Systems
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-lg px-4 py-2 font-mono text-xs transition ${active === item.href.slice(1) ? 'bg-stone-950 text-amber-50' : 'text-stone-600 hover:bg-stone-900/5 hover:text-stone-950'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href={siteLinks.email} className="cave-button hidden md:inline-flex">
          Start a build →
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-stone-900/15 bg-[#fffaf0] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="mx-auto mt-3 grid max-w-7xl gap-1 rounded-2xl border border-stone-900/15 bg-[#fffaf0] p-2 shadow-2xl shadow-stone-900/10 md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring min-h-11 rounded-xl px-4 py-3 font-mono text-sm text-stone-700 hover:bg-amber-100/50">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
