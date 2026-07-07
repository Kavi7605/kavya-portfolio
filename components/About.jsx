import React, { useEffect, useRef, useState } from 'react'

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          {/* Left */}
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">Building things that<br /><span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>actually matter</span></h2>
            
<p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem' }}>
  I'm Kavya Chavda, an Information Technology student at CSPIT (CHARUSAT), Gujarat.
  My journey began with a Diploma in Information Technology from Government Polytechnic Ahmedabad,
  and I've since focused on building practical software that solves real-world problems.
</p>
<p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '32px', fontSize: '0.95rem' }}>
  Through internships at Airports Authority of India, Abhedya Tech Services, and Softwingz Infotech,
  I've gained hands-on experience in .NET, Spring Boot, Python, AI-powered automation, and desktop
  application development. I enjoy building intelligent software, backend systems, and developer tools
  that combine automation, performance, and great user experiences.
</p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['Java', 'Python', 'Spring Boot', 'Security', '.NET'].map(tag => (
                <span key={tag} style={{
                  padding: '6px 14px',
                  background: 'rgba(124,106,247,0.08)',
                  border: '1px solid rgba(124,106,247,0.15)',
                  borderRadius: '100px',
                  fontSize: '0.78rem', color: 'var(--accent)',
                  fontWeight: 500, letterSpacing: '0.03em',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Info cards */}
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { icon: '🎓', title: 'B.Tech in IT', sub: 'CSPIT Charusat · Expected 2027', href: 'https://cspit.charusat.ac.in/' },
              { icon: '📜', title: 'Diploma in IT', sub: 'Govt. Polytechnic Ahmedabad · CGPA 7.56', href: 'http://www.gpahmedabad.ac.in/' },
              { icon: '🤖', title: 'Python Developer Intern', sub: 'Softwingz Infotech · Jun 2026 – Jul 2026', href: 'https://softwingz.com/' },
              { icon: '✈️', title: 'Software Intern', sub: 'Airports Authority of India · July – Aug 2023', href: 'https://www.aai.aero/en/airports/bhavnagar' },
              { icon: '🔐', title: 'Backend Intern', sub: 'Abhedya Tech Services · June – July 2025', href: 'https://abhedyatechservices.com/' },
            ].map(card => (
              <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" style={{
                padding: '20px 24px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                display: 'flex', alignItems: 'center', gap: '16px',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,106,247,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{ fontSize: '1.5rem' }}>{card.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '2px', color: 'var(--text)' }}>{card.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{card.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
