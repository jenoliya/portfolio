'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 120)
        })
      }
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '3', label: 'Companies worked at' },
    { value: '3+', label: 'Projects shipped' },
    { value: '5+', label: 'Certifications earned' },
    { value: '2', label: 'Languages spoken' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">01 — About</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              Backend-first,<br />
              <span className="italic text-accent">full-stack</span> by choice
            </h2>
            <p data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}
              className="text-muted text-lg leading-relaxed mb-6">
              {portfolio.bio}
            </p>
            <p data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}
              className="text-muted leading-relaxed mb-8">
              I hold a B.Sc. in Information Technology from Sri Ramakrishna College of Arts & Science, Coimbatore.
              Outside work, I&apos;m learning about system design, exploring AI tooling, and improving my open-source presence.
            </p>

            {/* Education block */}
            <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}
              className="border-l-2 border-accent pl-6">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-1">Education</p>
              <p className="font-display text-lg font-bold">{portfolio.education.degree}</p>
              <p className="text-muted text-sm">{portfolio.education.institution}</p>
              <p className="font-mono text-xs text-muted mt-1">{portfolio.education.period} · {portfolio.education.grade}</p>
            </div>
          </div>

          <div>
            <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
              <div className="grid grid-cols-2 gap-0">
                {stats.map((stat, i) => (
                  <div key={stat.label}
                    className={`p-8 border border-border hover:border-accent transition-colors group cursor-default
                      ${i % 2 === 0 ? 'border-r-0' : ''} ${i < 2 ? 'border-b-0' : ''}`}>
                    <p className="font-display text-5xl font-bold text-accent group-hover:scale-110 transition-transform inline-block">
                      {stat.value}
                    </p>
                    <p className="font-mono text-xs text-muted uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-ink text-paper">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">Currently</p>
                <p className="font-display text-lg italic">
                  Open to full-time & freelance opportunities.
                </p>
                <a href={`mailto:${portfolio.contact.email}`}
                  className="inline-block mt-4 font-mono text-xs text-paper/60 hover:text-accent transition-colors">
                  {portfolio.contact.email} →
                </a>
              </div>

              {/* Certifications teaser */}
              <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.5s' }}
                className="mt-6 p-6 border border-border">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Certifications</p>
                <ul className="space-y-2">
                  {portfolio.certifications.slice(0, 3).map((cert) => (
                    <li key={cert} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-accent mt-0.5">✦</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                  <li className="text-xs text-muted font-mono">+ {portfolio.certifications.length - 3} more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
