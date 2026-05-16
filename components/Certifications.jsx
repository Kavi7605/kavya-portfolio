import React, { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    title: 'Red Hat System Administration I (RH124)',
    academy: 'Red Hat Academy',
    year: '2025',
    link: 'https://www.credly.com/badges/fa7a9b95-e820-4153-a43b-2175810f4977',
    icon: '🐧',
    color: '#cc0000'
  },
  {
    title: 'Red Hat System Administration II (RH134)',
    academy: 'Red Hat Academy',
    year: '2025',
    link: 'https://www.credly.com/badges/5f715e14-51be-436a-9a1e-ef5bc699cbd3',
    icon: '🐧',
    color: '#cc0000'
  }
]

export default function Certifications() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">Certifications</div>
          <h2 className="section-title">Verified Credentials</h2>
          <p className="section-sub">Professional certifications and training.</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px',
        }}>
          {certifications.map((c, i) => (
            <div key={c.title} style={{
              padding: '32px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: `all 0.6s ${i * 0.1}s ease`,
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '55'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
                opacity: 0.6,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px', flex: 1 }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: c.color + '10', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', border: `1px solid ${c.color}20`
                }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '6px', lineHeight: 1.4 }}>
                    {c.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text3)' }}>
                    {c.academy} • {c.year}
                  </div>
                </div>
              </div>

              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block', textAlign: 'center',
                padding: '12px 20px',
                background: 'rgba(124,106,247,0.08)',
                border: '1px solid rgba(124,106,247,0.2)',
                borderRadius: '8px',
                fontSize: '0.85rem', color: 'var(--text)',
                fontWeight: 500,
                transition: 'all 0.2s',
                textDecoration: 'none',
                marginTop: 'auto'
              }}
              onMouseEnter={e => { e.target.style.background = 'rgba(124,106,247,0.15)' }}
              onMouseLeave={e => { e.target.style.background = 'rgba(124,106,247,0.08)' }}
              >
                View Credential ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
