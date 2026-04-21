'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-reveal]')
    els?.forEach((el, i) => {
      el.style.animationDelay = `${i * 120}ms`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-paper">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 border border-border rounded-full opacity-40 translate-x-1/2" />
        <div className="absolute top-40 right-10 w-64 h-64 border border-border rounded-full opacity-30 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
        <svg className="absolute bottom-20 right-20 opacity-10 hidden lg:block" width="160" height="160" viewBox="0 0 160 160">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="1.5" fill="#C8502A" />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p data-reveal className="opacity-0 font-mono text-accent text-sm tracking-[0.2em] uppercase mb-6">
            ✦ Open to new opportunities
          </p>
          <h1 data-reveal className="opacity-0 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink mb-6">
            Hi, I&apos;m
            <br />
            <span className="italic text-accent">Jenoliya</span>
            <br />
            Sunilkumar
          </h1>
          <p data-reveal className="opacity-0 text-muted text-lg leading-relaxed mb-4 max-w-md">
            {portfolio.tagline}
          </p>
          <div data-reveal className="opacity-0 flex flex-wrap gap-2 mb-8">
            {['Python · FastAPI · Django', 'React · Next.js · Qwik', 'PostgreSQL · MongoDB'].map((pill) => (
              <span key={pill} className="font-mono text-xs border border-border text-muted px-3 py-1.5">{pill}</span>
            ))}
          </div>
          <div data-reveal className="opacity-0 flex flex-wrap gap-4">
            <a href="#projects" className="font-mono text-sm bg-accent text-paper px-6 py-3 hover:bg-ink transition-colors duration-300 group flex items-center gap-2">
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="font-mono text-sm border border-ink text-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors duration-300">
              Let&apos;s Talk
            </a>
          </div>
          <div data-reveal className="opacity-0 flex items-center gap-6 mt-10">
            <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-xs uppercase tracking-widest">
              GitHub ↗
            </a>
            <a href={`mailto:${portfolio.contact.email}`}
              className="text-muted hover:text-accent transition-colors font-mono text-xs uppercase tracking-widest">
              Email ↗
            </a>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-xs uppercase tracking-widest">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div data-reveal className="opacity-0 hidden lg:flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-border relative overflow-hidden">
              {portfolio.avatar ? (
                <img src={portfolio.avatar} alt={portfolio.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-border to-paper gap-4">
                  <span className="font-display text-8xl font-bold text-accent/20 select-none">JS</span>
                  <div className="flex flex-col items-center gap-1">
                    {['FastAPI', 'React', 'PostgreSQL'].map((t) => (
                      <span key={t} className="font-mono text-xs text-muted/60">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-ink text-paper font-mono text-xs px-4 py-3">
              <span className="text-accent">✦</span> Coimbatore, India
            </div>
            <div className="absolute -top-4 -left-4 bg-accent text-paper font-mono text-xs px-3 py-2">
              4+ Projects Built
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-accent -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
