'use client'
import { useEffect, useRef } from 'react'
import { portfolio } from '../app/data'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (cardRef.current) { cardRef.current.style.opacity = '1'; cardRef.current.style.transform = 'translateY(0)' }
        }, index * 120)
      }
    }, { threshold: 0.1 })
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={cardRef}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}
      className="group border border-border hover:border-accent transition-all duration-300 p-8 relative">
      <span className="font-mono text-xs text-muted tracking-widest absolute top-6 right-6">{project.year}</span>
      <span className="font-display text-6xl font-bold text-border group-hover:text-accent/20 transition-colors absolute -bottom-3 -right-3">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="mb-4">
        <h3 className="font-display text-2xl font-bold text-ink group-hover:text-accent transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-muted leading-relaxed text-sm">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs bg-paper border border-border text-muted px-2 py-1">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-ink hover:text-accent transition-colors uppercase tracking-widest flex items-center gap-1">
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs bg-ink text-paper px-3 py-1.5 hover:bg-accent transition-colors uppercase tracking-widest">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 120)
        })
      }
    }, { threshold: 0.2 })
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef}>
          <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">04 — Projects</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
            <h2 data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
              className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Things I&apos;ve{' '}
              <span className="italic text-accent">shipped</span>{' '}
              in production
            </h2>
            <p data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}
              className="text-muted leading-relaxed">
              Real-world projects built across EdTech, AgriTech, and ML analytics — each one solving
              genuine problems for real users.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors border border-border hover:border-accent px-6 py-3">
            See all projects on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
