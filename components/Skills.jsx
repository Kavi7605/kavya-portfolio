import React, { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    skills: ['Java', 'Python', 'C#']
  },
  {
    category: 'Frameworks & Tools',
    icon: '🛠️',
    skills: ['Spring Boot', 'JavaFX', 'Unity Engine', '.NET']
  },
  {
    category: 'Platforms & Cloud',
    icon: '☁️',
    skills: ['Firebase', 'GitHub', 'Git', 'Auth0']
  },
  {
    category: 'Security & AI',
    icon: '🔐',
    skills: ['Secure Coding', 'Prompt Engineering']
  },
]

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A mix of languages, frameworks, and tools I've used in projects and internships.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s ease',
        }}>
          {skillGroups.map((group, gi) => (
            <div key={group.category} style={{
              padding: '28px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,106,247,0.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '8px 14px',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '0.85rem', color: 'var(--text2)',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* OS tags */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Operating Systems</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Windows', 'Red Hat Linux', 'Kali Linux', 'CentOS'].map(os => (
              <span key={os} style={{
                padding: '8px 20px',
                background: 'rgba(124,106,247,0.05)',
                border: '1px solid rgba(124,106,247,0.2)',
                borderRadius: '100px',
                fontSize: '0.85rem', color: 'var(--text)',
              }}>{os}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
