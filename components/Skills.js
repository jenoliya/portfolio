'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 border-t border-border bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">02 — Skills</span>
          <div className="flex-1 h-px bg-paper/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <h2
            data-reveal
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
          >
            Tools I use to{' '}
            <span className="italic text-accent">build</span>{' '}
            things
          </h2>
          <p
            data-reveal
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}
            className="text-paper/60 leading-relaxed"
          >
            A curated set of technologies I reach for to deliver performant, 
            beautiful, and maintainable software.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {portfolio.skills.map((group, groupIdx) => (
            <div
              key={group.category}
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${0.3 + groupIdx * 0.1}s`,
              }}
              className="border border-paper/10 p-8 hover:border-accent transition-colors group"
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-paper/70 group-hover:text-paper transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee / skills strip */}
        <div className="mt-20 border-t border-paper/10 pt-12 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap" style={{
            animation: 'marquee 20s linear infinite',
          }}>
            {[...portfolio.skills.flatMap(g => g.items), ...portfolio.skills.flatMap(g => g.items)].map((s, i) => (
              <span key={i} className="font-display text-4xl font-bold text-paper/5 flex-shrink-0">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
