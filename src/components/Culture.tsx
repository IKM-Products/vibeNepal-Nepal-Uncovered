import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { IconFlag, IconStar, IconPeople } from './common/Icons'

const cultureData = [
  {
    title: 'The Newari Civilization',
    sub: 'Kathmandu Valley',
    body: 'The Newars built Nepal\'s iconic pagoda architecture — a tradition that spread across Asia. Their festivals, cuisine, and intricate woodcarving define the valley. During Indra Jatra, masked dancers and the living goddess Kumari parade through ancient streets.',
    img: 'https://images.unsplash.com/photo-1726326477267-f36f1740ad8e?w=800&h=560&fit=crop&auto=format',
  },
  {
    title: 'Sherpa Mountain Culture',
    sub: 'Khumbu Region',
    body: 'The Sherpa are custodians of a Tibetan Buddhist tradition carried across the Himalayas centuries ago. Their monasteries hold Mani Rimdu ceremonial dances at 3,800 metres — a fusion of worship and performance that has no parallel anywhere on Earth.',
    img: 'https://images.unsplash.com/photo-1701255136052-b33f78a886a4?w=800&h=560&fit=crop&auto=format',
  },
  {
    title: 'Festivals of a Hundred Gods',
    sub: 'Nationwide',
    body: 'Nepal has more festivals than days in a year. Dashain, Tihar, Holi, Teej, Bisket Jatra — each carries distinct rituals, foods, and music. The Kumari, a living goddess selected as a pre-pubescent girl, blesses the nation from a gilded chariot each autumn.',
    img: 'https://images.unsplash.com/photo-1622598661631-3a46559a4817?w=800&h=560&fit=crop&auto=format',
  },
]

export default function Culture() {
  const ref = useReveal()
  const [active, setActive] = useState(0)
  return (
    <section id="culture" className="dark-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal">
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c8a96e' }}>People & Culture</span>
            <span className="gold-line" />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08, color: '#f5f0e8' }}>
              126 Peoples,<br />One Spirit
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {cultureData.map((c, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: '0.6rem 1.25rem',
                background: active === i ? '#c8a96e' : 'transparent',
                color: active === i ? '#1a1410' : 'rgba(245,240,232,0.5)',
                border: `1px solid ${active === i ? '#c8a96e' : 'rgba(245,240,232,0.15)'}`,
                cursor: 'pointer',
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                transition: 'all 0.2s',
              }}>
                {c.sub}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.15)' }}>
            <div className="img-zoom" style={{ overflow: 'hidden' }}>
              <img key={active} src={cultureData[active].img} alt={cultureData[active].title}
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block', animation: 'scaleIn 0.5s ease' }} />
            </div>
            <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '0.75rem' }}>{cultureData[active].sub}</span>
              <h3 className="font-serif" style={{ fontSize: '2rem', color: '#f5f0e8', marginBottom: '1.5rem', lineHeight: 1.15 }}>{cultureData[active].title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.65)', fontWeight: 400 }}>{cultureData[active].body}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
                {cultureData.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    width: i === active ? 28 : 8, height: 3,
                    background: i === active ? '#c8a96e' : 'rgba(245,240,232,0.2)',
                    border: 'none', cursor: 'pointer', transition: 'width 0.3s, background 0.3s', padding: 0,
                  }} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', marginTop: '1.5px', background: 'rgba(200,169,110,0.15)' }}>
            {[
              { icon: <IconFlag />, label: 'Nepali Language', body: 'The national tongue, descended from Sanskrit. One of 100+ languages spoken across Nepal\'s diverse ethnic tapestry.' },
              { icon: <IconStar />, label: 'Living Goddess (Kumari)', body: 'A pre-pubescent girl selected to embody the goddess Taleju. She blesses devotees from her palace window in Kathmandu.' },
              { icon: <IconPeople />, label: '6,000+ Monasteries', body: 'Nepal holds living traditions of Vajrayana Buddhism, thangka painting, and chanting passed down across centuries.' },
            ].map(item => (
              <div key={item.label} style={{ padding: '2rem', background: '#1a1410' }}>
                <span style={{ color: '#c8a96e', display: 'block', marginBottom: '0.75rem' }}>{item.icon}</span>
                <h4 className="font-serif" style={{ fontSize: '1.125rem', color: '#f5f0e8', marginBottom: '0.75rem' }}>{item.label}</h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'rgba(245,240,232,0.55)', fontWeight: 400 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 800px) { #culture .reveal > div:nth-child(4) > div { grid-template-columns: 1fr !important; } #culture .reveal > div:nth-child(5) { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}