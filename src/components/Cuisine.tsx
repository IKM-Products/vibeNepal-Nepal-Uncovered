import { useReveal } from '../hooks/useReveal'

const foods = [
  { name: 'Dal Bhat', sub: 'The National Dish', desc: 'Lentil soup with steamed rice, seasonal vegetables, achaar pickle, and often goat curry. Eaten twice daily by most Nepalis — the fuel of the Himalayas.', img: 'https://images.unsplash.com/photo-1552353338-0944fa7abdcd?w=500&h=360&fit=crop&auto=format' },
  { name: 'Momo', sub: 'Street Soul Food', desc: 'Steamed or fried dumplings filled with buff, pork, or vegetables, served with fiery sesame-tomato achar. Nepal\'s most beloved street food by a landslide.', img: 'https://images.unsplash.com/photo-1577398867427-405a8b8ab740?w=500&h=360&fit=crop&auto=format' },
  { name: 'Thukpa', sub: 'High-Altitude Warmth', desc: 'A Tibetan noodle broth loaded with vegetables or yak meat, spiced with ginger and chili. The defining dish of teahouse culture on mountain trails.', img: 'https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=500&h=360&fit=crop&auto=format' },
]

export default function Cuisine() {
  const ref = useReveal()
  return (
    <section id="cuisine" className="cream-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '5rem' }}>
              <span className="section-label">Nepali Cuisine</span>
              <span className="gold-line" />
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.1, color: '#1a1410', marginBottom: '1.25rem' }}>
                Eat the<br />Mountains.<br />
                <em style={{ color: '#c8a96e' }}>Taste the Valleys.</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#6b5d52', fontWeight: 400 }}>
                Nepali cuisine reflects its geography — the spice trade of the Terai, the hearty mountain provisions of the Khumbu, and the Tibetan influence of high-altitude culture.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {foods.map((f, _i) => (
                <div key={f.name} className="card-hover" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '200px 1fr', overflow: 'hidden' }}>
                  <div className="img-zoom" style={{ overflow: 'hidden' }}>
                    <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 180 }} />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8a96e' }}>{f.sub}</span>
                    <h3 className="font-serif" style={{ fontSize: '1.625rem', color: '#1a1410', margin: '0.4rem 0 0.75rem', lineHeight: 1.1 }}>{f.name}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#6b5d52', fontWeight: 400 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { #cuisine .reveal > div { grid-template-columns: 1fr !important; } #cuisine .reveal > div > div:last-child > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}