import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(245,240,232,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.2)' : 'none',
        transition: 'background 0.4s, border-color 0.4s',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#top" style={{ textDecoration: 'none' }}>
          <span className="font-serif" style={{ fontSize: '1.5rem', color: '#1a1410', letterSpacing: '-0.01em' }}>
            vibe<span style={{ color: '#c8a96e' }}>Nepal</span>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {['About', 'Places', 'Attractions', 'Culture', 'Cuisine', 'Facts'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
          className="show-mobile"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1410" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: '#f5f0e8', borderTop: '1px solid rgba(200,169,110,0.2)', padding: '1rem 2rem 1.5rem' }}>
          {['About', 'Places', 'Attractions', 'Culture', 'Cuisine', 'Facts'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid rgba(200,169,110,0.15)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, color: '#1a1410', letterSpacing: '0.05em' }}>
              {l}
            </a>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export function Hero() {
  const [py, setPy] = useState(0)
  useEffect(() => {
    const h = () => setPy(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <section id="top" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden', background: '#1a1410' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1800&h=1000&fit=crop&auto=format)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: `translateY(${py * 0.35}px)`,
        filter: 'brightness(0.55) saturate(0.8)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,20,16,0.85) 0%, rgba(26,20,16,0.3) 60%, transparent 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', padding: '0 4vw', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', animation: 'fadeUp 0.8s ease 0.2s both' }}>
            <div style={{ width: 32, height: 1, background: '#c8a96e' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c8a96e' }}>
              Nepal Uncovered
            </span>
          </div>
          <h1 className="font-serif" style={{
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            lineHeight: 0.95,
            color: '#f5f0e8',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.8s ease 0.4s both',
          }}>
            Where<br />
            <em style={{ color: '#c8a96e' }}>Heaven</em><br />
            Meets Earth
          </h1>
          <p style={{
            fontSize: '1.0625rem', fontWeight: 400, lineHeight: 1.75,
            color: 'rgba(245,240,232,0.72)', maxWidth: 480, marginBottom: '2.5rem',
            animation: 'fadeUp 0.8s ease 0.6s both',
          }}>
            Eight of the world’s ten highest peaks. Thousands of years of history. A nation shaped by countless cultures and traditions. Nepal does not whisper. It roars.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.8s ease 0.8s both' }}>
            <a href="#places" className="btn-primary">Explore Nepal</a>
            <a href="#about" className="btn-outline" style={{ color: '#f5f0e8', borderColor: 'rgba(245,240,232,0.4)' }}>Our Story</a>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
        borderTop: '1px solid rgba(245,240,232,0.1)',
        display: 'flex', overflow: 'hidden',
      }}>
        {[
          { val: '8,849 m', lab: 'Mt. Everest' },
          { val: '125+', lab: 'Ethnic Groups' },
          { val: '8+', lab: 'UNESCO Sites' },
          { val: '29M+', lab: 'Population' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '1.25rem 1rem', textAlign: 'center',
            borderRight: i < 3 ? '1px solid rgba(245,240,232,0.08)' : 'none',
            background: 'rgba(26,20,16,0.6)',
          }}>
            <div className="font-serif" style={{ fontSize: '1.375rem', color: '#c8a96e', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', marginTop: '0.3rem' }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  )
}