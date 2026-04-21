'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 150)
        })
      }
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-28 border-t border-border bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">03 — Experience</span>
          <div className="flex-1 h-px bg-paper/10" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h2 data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
              className="font-display text-4xl md:text-5xl font-bold leading-tight sticky top-28">
              Where I&apos;ve<br />
              <span className="italic text-accent">worked</span>
            </h2>
          </div>

          <div className="lg:col-span-3 space-y-0">
            {portfolio.experience.map((job, i) => (
              <div
                key={job.company}
                data-reveal
                style={{ opacity: 0, transform: 'translateY(20px)', transition: `all 0.6s ease ${0.2 + i * 0.15}s` }}
                className="border-b border-paper/10 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-2xl font-bold text-paper">{job.company}</h3>
                  <span className="font-mono text-xs text-accent border border-accent/30 px-3 py-1 flex-shrink-0">{job.period}</span>
                </div>
                <p className="font-mono text-xs text-paper/40 uppercase tracking-widest mb-5">{job.role}</p>
                <ul className="space-y-3">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-paper/60 flex items-start gap-3 leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
