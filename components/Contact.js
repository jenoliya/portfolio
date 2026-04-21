'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 150)
        })
      }
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-28 border-t border-border bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">05 — Contact</span>
          <div className="flex-1 h-px bg-paper/10" />
        </div>

        <div className="max-w-3xl">
          <h2 data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Let&apos;s build something{' '}
            <span className="italic text-accent">great</span>{' '}
            together.
          </h2>
          <p data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}
            className="text-paper/60 text-lg leading-relaxed mb-12">
            Whether you have a project in mind, a job opportunity, or just want to connect —
            I&apos;d love to hear from you. I typically respond within 24 hours.
          </p>

          <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}>
            <a href={`mailto:${portfolio.contact.email}`}
              className="inline-flex items-center gap-3 group">
              <span className="font-display text-2xl md:text-3xl font-bold text-paper group-hover:text-accent transition-colors border-b border-paper/20 group-hover:border-accent pb-1">
                {portfolio.contact.email}
              </span>
              <span className="text-accent text-2xl transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Phone */}
          <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}
            className="mt-6">
            <a href={`tel:${portfolio.contact.phone}`}
              className="font-mono text-sm text-paper/40 hover:text-accent transition-colors">
              {portfolio.contact.phone}
            </a>
          </div>
        </div>

        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.5s' }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mt-24 pt-12 border-t border-paper/10">
          <div className="flex gap-6">
            <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-paper/40 hover:text-accent transition-colors uppercase tracking-widest">
              GitHub ↗
            </a>
            <a href={`mailto:${portfolio.contact.email}`}
              className="font-mono text-xs text-paper/40 hover:text-accent transition-colors uppercase tracking-widest">
              Email ↗
            </a>
            <a href={`tel:${portfolio.contact.phone}`}
              className="font-mono text-xs text-paper/40 hover:text-accent transition-colors uppercase tracking-widest">
              Phone ↗
            </a>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-paper/40 hover:text-accent transition-colors uppercase tracking-widest">
              LinkedIn ↗
            </a>
          </div>
          <p className="font-mono text-xs text-paper/30 tracking-wide">
            © {new Date().getFullYear()} Jenoliya Sunilkumar. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
