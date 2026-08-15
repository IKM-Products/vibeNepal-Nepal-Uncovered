import { useReveal } from '../hooks/useReveal'

const attractionsData = [
  {
    name: 'Pashupatinath Temple',
    loc: 'Kathmandu',
    desc: 'The holiest Hindu shrine in Nepal — a sprawling complex of ghats, courtyards, and golden spires on the sacred Bagmati River. Witness ancient Aarti fire rituals at dawn.',
    img: 'https://images.unsplash.com/photo-1648298471396-5f8a2614b20d?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Boudhanath Stupa',
    loc: 'Kathmandu',
    desc: 'One of the largest Buddhist stupas in the world. The all-seeing eyes of the Buddha gaze from a 36-metre white mandala surrounded by monasteries and prayer wheels.',
    img: 'https://images.unsplash.com/photo-1648298470994-7065f521375c?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Swayambhunath',
    loc: 'Kathmandu Valley',
    desc: 'The Monkey Temple. A 2,000-year-old hilltop stupa ringed by macaques, prayer flags, and a panoramic sweep of the entire Kathmandu Valley.',
    img: 'https://images.unsplash.com/photo-1550642249-b715bc35f898?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Patan Durbar Square',
    loc: 'Lalitpur',
    desc: 'A medieval masterwork of Newari architecture. Stone Krishnas, intricately carved pagodas, and a museum of bronze craft that rivals any in Asia.',
    img: 'https://images.unsplash.com/photo-1662264018015-390d58a35504?w=600&h=400&fit=crop&auto=format',
  },
]

export default function Attractions() {
  const ref = useReveal()
  return (
    <section id="attractions" className="sand-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal">
          <div style={{ marginBottom: '4rem' }}>
            <span className="section-label">Tourist Attractions</span>
            <span className="gold-line" />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08, color: '#1a1410' }}>
              Sacred. Wild.<br />Unforgettable.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {attractionsData.map((a, i) => (
              <div key={a.name} className="card-hover reveal" style={{ background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column', animationDelay: `${i * 0.1}s` }}>
                <div className="img-zoom" style={{ overflow: 'hidden' }}>
                  <img src={a.img} alt={a.name} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '0.5rem' }}>{a.loc}</div>
                  <h3 className="font-serif" style={{ fontSize: '1.375rem', color: '#1a1410', marginBottom: '0.75rem', lineHeight: 1.2 }}>{a.name}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#6b5d52', fontWeight: 400 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 700px) { #attractions .reveal > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}