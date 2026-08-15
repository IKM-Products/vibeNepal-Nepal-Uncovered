import { useReveal } from '../hooks/useReveal'

const attractionsData = [
  {
    name: 'Pashupatinath Temple',
    loc: 'Kathmandu',
    desc: 'The most sacred Hindu temple in Nepal, set along the holy Bagmati River. Discover ancient temples, courtyards, and traditional rituals that remain part of daily life.',
    img: 'https://media.istockphoto.com/id/2262042177/photo/pashupatinath-temple-in-kathmandu-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=gdkQWpCqBjrKvnOTdLCCbWCcUXvo_XKyKaT3SAwOBog=',
  },
  {
    name: 'Boudhanath Stupa',
    loc: 'Kathmandu',
    desc: 'One of the world’s largest Buddhist stupas, Boudhanath rises above Kathmandu with its iconic white dome, Buddha’s watchful eyes, surrounding monasteries, and spinning prayer wheels.',
    img: 'https://images.unsplash.com/photo-1617469170169-55626c028519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym91ZGhhbmF0aCUyMHN0dXBhfGVufDB8fDB8fHww',
  },
  {
    name: 'Swayambhunath',
    loc: 'Kathmandu Valley',
    desc: 'The Monkey Temple. A 2,000-year-old hilltop shrine surrounded by playful monkeys, prayer flags, and breathtaking views across the Kathmandu Valley.',
    img: 'https://images.unsplash.com/photo-1706188540639-d2ad13995266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dheWFtYmh1bmF0aHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Patan Durbar Square',
    loc: 'Lalitpur',
    desc: 'A remarkable example of Newari architecture. Beautifully decorated shrines, detailed stone sculptures, beautiful pagodas, and a rich collection of traditional bronze art.',
    img: 'https://plus.unsplash.com/premium_photo-1697729591214-a4dc41d7d760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0YW4lMjBkdXJiYXIlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D',
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
              Spiritual. Majestic.<br />Unforgettable.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {attractionsData.map((a) => (
              <div key={a.name} className="card-hover" style={{ background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className="img-zoom" style={{ overflow: 'hidden' }}>
                  <img src={a.img} alt={a.name} referrerPolicy="no-referrer" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
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