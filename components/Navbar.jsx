import React, { useState, useEffect } from 'react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '18px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800, fontSize: '1.2rem',
        background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textDecoration: 'none'
      }}>KC</a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-links">
        {links.map(link => (
          <a key={link.name} href={link.href} target={link.target} rel={link.target === '_blank' ? 'noopener noreferrer' : undefined} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.875rem',
            fontWeight: 500, color: 'var(--text2)',
            transition: 'color 0.2s',
            letterSpacing: '0.02em',
            textDecoration: 'none'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >{link.name}</a>
        ))}
      </div>

      <a href="/D24IT174.pdf" target="_blank" rel="noopener noreferrer" style={{
        padding: '8px 20px',
        border: '1px solid var(--accent)',
        borderRadius: '100px',
        fontSize: '0.8rem',
        fontWeight: 500,
        color: 'var(--accent)',
        transition: 'all 0.2s',
        letterSpacing: '0.05em',
        textDecoration: 'none',
      }}
      onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white' }}
      onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
      >Resume</a>
    </nav>
  )
}
