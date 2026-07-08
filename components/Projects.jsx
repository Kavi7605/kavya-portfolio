import React, { useEffect, useRef, useState } from 'react'

const projects = [
  {
    name: 'System Automation Assistant',
    year: '2026',
    tag: 'AI / Automation',
    color: '#38bdf8',
    desc: 'An AI-powered Windows System Automation Assistant using Python and local LLMs for intelligent desktop automation and workflow execution.',
    tech: ['Python', 'Local LLMs', 'Ollama'],
    icon: '🤖',
    github: 'https://github.com/Kavi7605/SystemAutomationAssistant'
  },
  {
    name: 'SentinelX',
    year: '2026',
    tag: 'Security Tool',
    color: '#7c6af7',
    desc: 'A real-time Windows process monitoring and threat detection system. Features hidden process detection, heuristic risk scoring, and a WPF dashboard.',
    tech: ['C++', 'C#', 'Win32 API', 'WPF'],
    icon: '🛡️',
    github: 'https://github.com/Kavi7605/SentinelX_Core'
  },
  {
    name: 'CypherChain AI',
    year: '2025',
    tag: 'AI / Security',
    color: '#e05f8e',
    desc: 'An AI-driven supply chain vulnerability scanner. Implements automated threat detection and secure data pipelines.',
    tech: ['Python', 'AI', 'Security'],
    icon: '🔗',
    github: 'https://github.com/Kavi7605/cypherchain-ai'
  },
  {
    name: 'Dots and Boxes',
    year: '2024–25',
    tag: 'Game / Full-Stack',
    color: '#4ade80',
    desc: 'A classic multiplayer game featuring real-time client-server synchronization, Firebase backend, and Facebook OAuth integration.',
    tech: ['JavaFX', 'Firebase', 'OAuth'],
    icon: '🎮',
    github: 'https://github.com/Kavi7605/dotsandboxes'
  },
  {
    name: 'BA-Project (AAI)',
    year: '2023',
    tag: 'Enterprise App',
    color: '#f59e0b',
    desc: 'A .NET WinForms application built for the Airports Authority of India to manage breath-analyzer testing with automated employee selection.',
    tech: ['.NET', 'WinForms', 'C#'],
    icon: '✈️',
    github: 'https://github.com/Kavi7605/BA-Project'
  },
  {
    name: 'Flappy-Birdie',
    year: '2024',
    tag: 'Game Dev',
    color: '#06b6d4',
    desc: 'A lightweight Flappy Bird inspired game focused on gameplay logic, collision mechanics, score tracking, and smooth animations.',
    tech: ['Unity', 'C#', 'UI'],
    icon: '🐦',
    github: 'https://github.com/Kavi7605/Flappy-Birdie'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">Real projects from internships, academics, and personal exploration.</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px',
        }}>
          {projects.map((p, i) => (
            <div key={p.name} style={{
              padding: '32px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: `all 0.6s ${i * 0.1}s ease`,
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '55'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Top glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                opacity: 0.6,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    padding: '4px 10px', borderRadius: '100px',
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em',
                    background: p.color + '18', color: p.color, border: `1px solid ${p.color}30`,
                  }}>{p.tag}</span>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginTop: '6px' }}>{p.year}</div>
                </div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem',
                marginBottom: '12px', color: 'var(--text)',
              }}>{p.name}</h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '24px', flexGrow: 1 }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: '4px 10px',
                    background: 'var(--bg3)',
                    borderRadius: '6px',
                    fontSize: '0.72rem', color: 'var(--text2)',
                    fontFamily: 'monospace',
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    padding: '8px 16px',
                    background: 'rgba(124,106,247,0.08)',
                    border: '1px solid rgba(124,106,247,0.2)',
                    borderRadius: '6px',
                    fontSize: '0.8rem', color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.background = 'rgba(124,106,247,0.15)'}
                    onMouseLeave={e => e.target.style.background = 'rgba(124,106,247,0.08)'}
                  >GitHub ↗</a>
                )}
                <a href={p.link || '#'} target={p.link ? '_blank' : '_self'} rel="noopener noreferrer" style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '0.8rem', color: 'var(--text2)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.target.style.borderColor = 'var(--text3)'}
                  onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
                >Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
