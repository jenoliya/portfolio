'use client'
import { useState, useEffect } from 'react'
import { portfolio } from '../app/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-bold text-ink tracking-tight hover:text-accent transition-colors">
          Jenoliya<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-sm font-mono text-muted hover:text-accent transition-colors tracking-wide uppercase">
              {link}
            </a>
          ))}
          <a href={`mailto:${portfolio.contact.email}`}
            className="text-sm font-mono bg-ink text-paper px-4 py-2 hover:bg-accent transition-colors">
            Hire Me
          </a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="bg-paper border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-sm font-mono text-muted hover:text-accent transition-colors uppercase tracking-wide">
              {link}
            </a>
          ))}
          <a href={`mailto:${portfolio.contact.email}`}
            className="text-sm font-mono bg-ink text-paper px-4 py-2 text-center hover:bg-accent transition-colors">
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
