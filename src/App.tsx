import { Navbar, Hero } from './components/Home'
import About from './components/About'
import Places from './components/Places'
import Attractions from './components/Attractions'
import Culture from './components/Culture'
import Cuisine from './components/Cuisine'
import Facts from './components/Facts'

function MarqueeStrip() {
  const items = ['Everest Base Camp', 'Annapurna Circuit', 'Boudhanath Stupa', 'Pokhara', 'Chitwan Safaris', 'Patan Durbar', 'Lumbini', 'Nagarkot Sunrise', 'Mustang Desert', 'Rara Lake']
  return (
    <div style={{ background: '#c8a96e', padding: '1rem 0', overflow: 'hidden' }}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', padding: '0 2rem', whiteSpace: 'nowrap', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1410' }}>
            {item}
            <svg width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill="#1a1410" /></svg>
          </span>
        ))}
      </div>
    </div>
  )
}

function Banner() {
  return (
    <div style={{ position: 'relative', height: 460, overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1636513988093-126e51dee32d?w=1600&h=600&fit=crop&auto=format"
        alt="Green Nepal valley with mountain backdrop"
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45) saturate(0.7)' }}
      />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'rgba(26,20,16,0.25)' }}>
        <blockquote style={{ textAlign: 'center', maxWidth: 740 }}>
          <p className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#f5f0e8', lineHeight: 1.3, fontStyle: 'italic' }}>
            "Nepal is not just a destination.<br />It is a transformation."
          </p>
          <div style={{ width: 40, height: 2, background: '#c8a96e', margin: '1.5rem auto 0' }} />
        </blockquote>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#120e0a', color: '#f5f0e8', padding: '5rem 4vw 3rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
          <div>
            <div className="font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              vibe<span style={{ color: '#c8a96e' }}>Nepal</span>
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.5)', maxWidth: 340, fontWeight: 400 }}>
              Nepal Uncovered is a love letter to the Himalayan republic — its peaks, its people, and its timeless spirit.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '1.25rem' }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['About Nepal', 'Best Places', 'Attractions', 'Culture & People', 'Cuisine', 'Key Facts'].map(l => (
                <li key={l}><a href={`#${l.split(' ')[0].toLowerCase()}`} style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.45)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 400 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c8a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '1.25rem' }}>Essentials</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Capital: Kathmandu', 'Currency: NPR', 'UTC +5:45', 'Visa: On Arrival', 'Language: Nepali'].map(l => (
                <li key={l} style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.4)', fontWeight: 400 }}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(245,240,232,0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.3)', fontWeight: 400 }}>Made with reverence for Nepal and its 29 million people.</p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.3)', fontWeight: 400 }}>vibeNepal: Nepal Uncovered © 2026</p>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } footer > div > div:first-child > div:first-child { grid-column: span 2; } }`}</style>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Places />
      <MarqueeStrip />
      <Attractions />
      <Banner />
      <Culture />
      <Cuisine />
      <Facts />
      <Footer />
    </div>
  )
}