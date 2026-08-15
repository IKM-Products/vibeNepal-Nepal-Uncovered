import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="sand-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">About Nepal</span>
            <span className="gold-line" />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', lineHeight: 1.08, marginBottom: '2rem', color: '#1a1410' }}>
              A Nation Written<br />in the Himalayas
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.0125rem', lineHeight: 1.8, color: '#4a3f36', fontWeight: 400 }}>
              <p style={{ textAlign: 'justify' }}>Nepal is a landlocked sovereign nation between China and India, occupying the central Himalayas. It holds eight of the world's ten highest peaks including Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu, and Annapurna.</p>
              <p style={{ textAlign: 'justify' }}>From the hot and humid Terai jungle at 59 metres to glacial peaks above 8,000 metres, Nepal is home to a variety of ecosystems, all within a fairly small area. Its dramatic change in elevation makes it truly unique.</p>
              <p style={{ textAlign: 'justify' }}>Once the world's only Hindu kingdom, Nepal became a federal democratic republic in 2008, ending 240 years of Shah dynasty rule. Yet Buddhism, and diverse traditional beliefs come together to create Nepal’s rich and vibrant culture.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="img-zoom" style={{ overflow: 'hidden', borderRadius: 2 }}>
              <img
                src="https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=800&h=500&fit=crop&auto=format"
                alt="Aerial view of a Himalayan village community"
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              {[
                { v: 'Kathmandu', l: 'Capital' },
                { v: 'Nepali', l: 'Official Language' },
                { v: '147,181 km²', l: 'Land Area' },
              ].map(s => (
                <div key={s.l} style={{ padding: '1.25rem', background: '#ede8de', borderTop: '2px solid #c8a96e' }}>
                  <div className="font-serif" style={{ fontSize: '1.1rem', color: '#1a1410', marginBottom: '0.25rem' }}>{s.v}</div>
                  <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a0844a' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { #about .reveal { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  )
}