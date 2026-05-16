import React, { useEffect, useState } from 'react'

function SocialLink({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '10px 24px',
        background: 'rgba(124,106,247,0.05)',
        border: '1px solid rgba(124,106,247,0.2)',
        borderRadius: '100px',
        fontWeight: 500,
        fontSize: '0.85rem',
        color: 'var(--text)',
        transition: 'all 0.2s',
        textDecoration: 'none',
        display: 'inline-block',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(124,106,247,0.15)'
        e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(124,106,247,0.05)'
        e.currentTarget.style.borderColor = 'rgba(124,106,247,0.2)'
      }}
    >
      {text}
    </a>
  )
}

// Premium neon SVG gaming controller
function GameController() {
  return (
    <svg
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 0 50px rgba(124,106,247,0.4)) drop-shadow(0 0 100px rgba(224,95,142,0.18))' }}
    >
      <defs>
        {/* Body gradient */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b35" />
          <stop offset="50%" stopColor="#16141f" />
          <stop offset="100%" stopColor="#0d0c14" />
        </linearGradient>

        {/* Left grip gradient */}
        <linearGradient id="leftGrip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1728" />
          <stop offset="100%" stopColor="#0e0d17" />
        </linearGradient>

        {/* Right grip gradient */}
        <linearGradient id="rightGrip" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1728" />
          <stop offset="100%" stopColor="#0e0d17" />
        </linearGradient>

        {/* Button face gradient */}
        <radialGradient id="btnGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#2a2540" />
          <stop offset="100%" stopColor="#151220" />
        </radialGradient>

        {/* Stick gradient */}
        <radialGradient id="stickGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#2e2a44" />
          <stop offset="100%" stopColor="#111020" />
        </radialGradient>

        {/* Surface highlight */}
        <linearGradient id="surfaceHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Accent glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle inner shadow */}
        <filter id="innerShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset dx="0" dy="2" result="offsetBlur" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>
      </defs>

      {/* ── CONTROLLER BODY ── */}
      {/* Main body shape */}
      <path
        d="M 90 70
           Q 90 45 130 45
           L 270 45
           Q 310 45 310 70
           L 318 130
           Q 340 138 354 160
           Q 370 185 362 210
           Q 350 240 310 245
           L 285 248
           Q 268 248 258 228
           L 248 210
           L 152 210
           L 142 228
           Q 132 248 115 248
           L 90 245
           Q 50 240 38 210
           Q 30 185 46 160
           Q 60 138 82 130
           Z"
        fill="url(#bodyGrad)"
        stroke="rgba(124,106,247,0.15)"
        strokeWidth="1"
      />

      {/* Surface highlight sheen */}
      <path
        d="M 100 68
           Q 100 52 130 52
           L 270 52
           Q 300 52 300 68
           L 308 118
           Q 280 108 200 108
           Q 120 108 92 118
           Z"
        fill="url(#surfaceHighlight)"
      />

      {/* Left grip */}
      <path
        d="M 82 130
           Q 60 138 46 160
           Q 30 185 38 210
           Q 50 240 90 245
           L 115 248
           Q 132 248 142 228
           L 152 210
           L 108 200
           Q 72 190 68 165
           Q 65 148 82 130 Z"
        fill="url(#leftGrip)"
        stroke="rgba(124,106,247,0.1)"
        strokeWidth="0.5"
      />

      {/* Right grip */}
      <path
        d="M 318 130
           Q 340 138 354 160
           Q 370 185 362 210
           Q 350 240 310 245
           L 285 248
           Q 268 248 258 228
           L 248 210
           L 292 200
           Q 328 190 332 165
           Q 335 148 318 130 Z"
        fill="url(#rightGrip)"
        stroke="rgba(124,106,247,0.1)"
        strokeWidth="0.5"
      />

      {/* Center groove line */}
      <line x1="200" y1="52" x2="200" y2="106" stroke="rgba(124,106,247,0.08)" strokeWidth="1" />

      {/* ── D-PAD ── */}
      {/* Horizontal bar */}
      <rect x="108" y="118" width="52" height="18" rx="3" fill="url(#btnGrad)" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />
      {/* Vertical bar */}
      <rect x="125" y="101" width="18" height="52" rx="3" fill="url(#btnGrad)" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />
      {/* D-pad center cap */}
      <rect x="122" y="115" width="24" height="24" rx="2" fill="#1d1a2e" />
      {/* D-pad arrows */}
      <polygon points="134,107 130,112 138,112" fill="rgba(124,106,247,0.5)" />
      <polygon points="134,147 130,142 138,142" fill="rgba(124,106,247,0.5)" />
      <polygon points="112,127 117,123 117,131" fill="rgba(124,106,247,0.5)" />
      <polygon points="156,127 151,123 151,131" fill="rgba(124,106,247,0.5)" />

      {/* ── FACE BUTTONS (ABXY) ── */}
      {/* Y - top (yellow) */}
      <circle cx="258" cy="103" r="11" fill="#1e1b2e" stroke="rgba(255,200,0,0.3)" strokeWidth="1" />
      <circle cx="258" cy="103" r="8" fill="#f5c518" filter="url(#glow)" />
      <circle cx="255" cy="100" r="2.5" fill="rgba(255,255,255,0.25)" />

      {/* X - left (blue) */}
      <circle cx="240" cy="121" r="11" fill="#1e1b2e" stroke="rgba(80,140,255,0.3)" strokeWidth="1" />
      <circle cx="240" cy="121" r="8" fill="#4d90fe" filter="url(#glow)" />
      <circle cx="237" cy="118" r="2.5" fill="rgba(255,255,255,0.25)" />

      {/* B - right (red) */}
      <circle cx="276" cy="121" r="11" fill="#1e1b2e" stroke="rgba(255,80,80,0.3)" strokeWidth="1" />
      <circle cx="276" cy="121" r="8" fill="#e05555" filter="url(#glow)" />
      <circle cx="273" cy="118" r="2.5" fill="rgba(255,255,255,0.25)" />

      {/* A - bottom (green) */}
      <circle cx="258" cy="139" r="11" fill="#1e1b2e" stroke="rgba(80,200,120,0.3)" strokeWidth="1" />
      <circle cx="258" cy="139" r="8" fill="#4ade80" filter="url(#glow)" />
      <circle cx="255" cy="136" r="2.5" fill="rgba(255,255,255,0.25)" />

      {/* ── ANALOG STICKS ── */}
      {/* Left stick base */}
      <ellipse cx="145" cy="165" rx="22" ry="22" fill="#0e0d18" stroke="rgba(124,106,247,0.15)" strokeWidth="1" />
      <ellipse cx="145" cy="165" rx="16" ry="16" fill="url(#stickGrad)" />
      <ellipse cx="145" cy="165" rx="10" ry="10" fill="#1a1730" />
      <ellipse cx="141" cy="161" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.08)" />

      {/* Right stick base */}
      <ellipse cx="240" cy="165" rx="22" ry="22" fill="#0e0d18" stroke="rgba(124,106,247,0.15)" strokeWidth="1" />
      <ellipse cx="240" cy="165" rx="16" ry="16" fill="url(#stickGrad)" />
      <ellipse cx="240" cy="165" rx="10" ry="10" fill="#1a1730" />
      <ellipse cx="236" cy="161" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.08)" />

      {/* ── CENTER BUTTONS ── */}
      {/* Menu / Options buttons */}
      <rect x="183" y="96" width="14" height="8" rx="4" fill="#1a1730" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />
      <rect x="203" y="96" width="14" height="8" rx="4" fill="#1a1730" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />

      {/* Center home-ish button */}
      <circle cx="200" cy="130" r="12" fill="#141220" stroke="rgba(124,106,247,0.3)" strokeWidth="1" />
      <circle cx="200" cy="130" r="8" fill="url(#stickGrad)" stroke="rgba(124,106,247,0.15)" strokeWidth="0.5" />
      {/* Home icon lines */}
      <polygon points="200,125 195,131 205,131" fill="rgba(124,106,247,0.6)" />
      <rect x="196" y="130" width="8" height="5" rx="0.5" fill="rgba(124,106,247,0.4)" />

      {/* ── BUMPERS / TRIGGERS (top) ── */}
      {/* Left bumper */}
      <path d="M 118 56 Q 118 47 140 47 L 165 47 L 162 58 Q 145 60 118 58 Z"
        fill="#1d1a30" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />
      {/* Right bumper */}
      <path d="M 282 56 Q 282 47 260 47 L 235 47 L 238 58 Q 255 60 282 58 Z"
        fill="#1d1a30" stroke="rgba(124,106,247,0.2)" strokeWidth="0.5" />

      {/* ── ACCENT NEON LINES ── */}
      {/* Left edge glow accent */}
      <path d="M 68 168 Q 50 190 58 210" stroke="rgba(124,106,247,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Right edge glow accent */}
      <path d="M 332 168 Q 350 190 342 210" stroke="rgba(224,95,142,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Bottom neon underglow reflection */}
      <ellipse cx="200" cy="255" rx="120" ry="10" fill="rgba(124,106,247,0.08)" />
      <ellipse cx="200" cy="258" rx="80" ry="6" fill="rgba(224,95,142,0.05)" />
    </svg>
  )
}

const roles = ['Software Developer', 'IT Student @ CSPIT', 'Security Enthusiast']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 32px 60px',
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '30%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(224,95,142,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div
        className="container hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px',
            background: 'rgba(124,106,247,0.08)',
            border: '1px solid rgba(124,106,247,0.2)',
            borderRadius: '100px',
            marginBottom: '36px',
            animation: 'fadeUp 0.6s ease forwards',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px #4ade80',
              animation: 'pulse-glow 2s ease infinite',
              flexShrink: 0,
            }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text2)', letterSpacing: '0.08em' }}>
              Open to internships & opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
            lineHeight: 1.0,
            marginBottom: '24px',
            animation: 'fadeUp 0.7s 0.1s ease forwards',
            opacity: 0,
          }}>
            Hi, I'm<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Kavya Chavda</span>
          </h1>

          {/* Animated role */}
          <div style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--text2)',
            marginBottom: '28px',
            height: '2rem',
            animation: 'fadeUp 0.7s 0.2s ease forwards',
            opacity: 0,
          }}>
            <span style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
              fontWeight: 300,
            }}>
              {roles[roleIdx]}
            </span>
          </div>

          {/* Description */}
          <p style={{
            color: 'var(--text2)', fontSize: '1rem',
            maxWidth: '480px', lineHeight: 1.8,
            marginBottom: '40px',
            animation: 'fadeUp 0.7s 0.3s ease forwards',
            opacity: 0,
          }}>
            IT student at CSPIT with hands-on experience in Java, Python, Spring Boot, and security tools.
            I build real-world applications — from AI-driven vulnerability scanners to game backends.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex', gap: '16px', flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.4s ease forwards',
            opacity: 0,
          }}>
            <a
              href="#projects"
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                borderRadius: '100px',
                fontWeight: 600, fontSize: '0.9rem',
                color: 'white', letterSpacing: '0.02em',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 8px 30px rgba(124,106,247,0.3)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,106,247,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,106,247,0.3)'
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                fontWeight: 500, fontSize: '0.9rem',
                color: 'var(--text)',
                transition: 'border-color 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-right" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
          animation: 'fadeUp 0.8s 0.2s ease forwards',
          opacity: 0,
        }}>
          {/* Controller visual */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            animation: 'float 6s ease-in-out infinite',
          }}>
            {/* Glow halo behind controller */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '380px', height: '240px',
              background: 'radial-gradient(ellipse, rgba(124,106,247,0.28) 0%, rgba(224,95,142,0.12) 50%, transparent 75%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(28px)',
            }} />
            <GameController />
          </div>

          {/* Social links */}
          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '32px',
            animation: 'fadeUp 0.7s 0.5s ease forwards',
            opacity: 0,
          }}>
            <SocialLink href="https://github.com/Kavi7605" text="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/kavya-chavda-6ab030319/" text="LinkedIn" />
            <SocialLink href="/D24IT174.pdf" text="Download Resume" />
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '40px',
            marginTop: '28px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            width: '100%',
            justifyContent: 'center',
            animation: 'fadeUp 0.7s 0.6s ease forwards',
            opacity: 0,
          }}>
            {[
              { n: '2+', label: 'Internships' },
              { n: '4+', label: 'Projects' },
              { n: 'B.Tech', label: 'IT @ CSPIT' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.8rem', color: 'var(--text)',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{s.n}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s 1s ease forwards', opacity: 0,
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      {/* Responsive styles injected via style tag */}
      <style>{`
        .hero-grid {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-grid .hero-right {
            order: -1;
          }
          .hero-grid .hero-right svg {
            max-width: 300px !important;
          }
        }

        @media (max-width: 540px) {
          .hero-grid .hero-right svg {
            max-width: 230px !important;
          }
        }
      `}</style>
    </section>
  )
}