export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
      color: 'var(--text3)',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg2)',
      fontSize: '0.85rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
        <a href="https://github.com/Kavi7605" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent)'} onMouseLeave={e => e.target.style.color='var(--text2)'}>GitHub</a>
        <a href="https://www.linkedin.com/in/kavya-chavda-6ab030319/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent)'} onMouseLeave={e => e.target.style.color='var(--text2)'}>LinkedIn</a>
      </div>
      <div style={{ marginBottom: '8px' }}>Designed & Developed by Kavya Chavda</div>
      <div style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Kavya Chavda</div>
    </footer>
  )
}