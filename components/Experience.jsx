import React, { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Python Developer Intern',
    company: 'Softwingz Infotech',
    href: '#',
    period: '09 June 2026 – 08 July 2026',
    color: '#4ade80',
    points: [
      'Developed an AI-powered Windows System Automation Assistant using Python and local LLMs.',
      'Implemented intelligent desktop automation including application control, file management, screenshots, browser automation, and workflow execution.',
      'Built context-aware command execution with conversational memory and structured JSON-based action planning.',
      'Integrated Ollama-powered language models with Python automation libraries to execute real operating system tasks.',
      'Created automated testing and logging systems to improve reliability and maintainability.',
    ]
  },
  {
    role: 'Backend Intern',
    company: 'Abhedya Tech Services',
    href: 'https://abhedyatechservices.com/',
    period: 'June 2025 – July 2025',
    color: '#7c6af7',
    points: [
      'Worked on a Spring Boot project; configured RESTful APIs and database models.',
      'Implemented Auth0 authentication and learned server-side security practices.',
    ]
  },
  {
    role: 'Software Intern',
    company: 'Airports Authority of India',
    href: 'https://www.aai.aero/en/airports/bhavnagar',
    period: 'July 2023 – Aug 2023',
    color: '#e05f8e',
    points: [
      'Designed and implemented "BA-Project," a .NET Windows application for breath-analyzer data management.',
      'Developed UI using WinForms and integrated Access database for real-time record management.',
      'Conducted testing to identify and resolve bugs and performance issues.',
    ]
  },
]

export default function Experience() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '700px' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '20px', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />

          {experiences.map((exp, i) => (
            <div key={exp.company} style={{
              paddingLeft: '56px', marginBottom: '48px', position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-20px)',
              transition: `all 0.6s ${i * 0.2}s ease`,
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '13px', top: '6px',
                width: '14px', height: '14px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 16px ${exp.color}60`,
              }} />

              <div style={{
                padding: '28px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = exp.color + '40'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{exp.role}</h3>
                    <a href={exp.href} target="_blank" rel="noopener noreferrer" style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem', marginTop: '4px', display: 'inline-block', textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => e.target.style.opacity = '0.8'}
                      onMouseLeave={e => e.target.style.opacity = '1'}
                    >{exp.company} ↗</a>
                  </div>
                  <span style={{
                    padding: '4px 12px',
                    background: 'var(--bg3)',
                    borderRadius: '100px',
                    fontSize: '0.75rem', color: 'var(--text2)',
                    whiteSpace: 'nowrap',
                  }}>{exp.period}</span>
                </div>
                <ul style={{ marginTop: '16px', paddingLeft: '0', listStyle: 'none' }}>
                  {exp.points.map((pt, pi) => (
                    <li key={pi} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ color: exp.color, marginTop: '2px', flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: '0.87rem', color: 'var(--text2)', lineHeight: 1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
