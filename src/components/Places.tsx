import { useState, useRef, useEffect } from 'react'
import { IconMountain, IconWaves, IconCamera, IconLeaf, IconCompass, IconStar } from './common/Icons'

const placesData = [
  {
    num: '01',
    name: 'Everest Base Camp',
    region: 'Khumbu, Sagarmatha Zone',
    altitude: '5,364 m',
    category: 'High Altitude Trek',
    desc: 'The most iconic trek on Earth. Fourteen days through Sherpa villages, glacial moraines, and rhododendron forests to stand at the foot of the world\'s highest summit.',
    img: 'https://images.unsplash.com/photo-1697746149225-63a33bcb2ea4?w=900&h=600&fit=crop&auto=format',
    icon: <IconMountain />,
  },
  {
    num: '02',
    name: 'Pokhara',
    region: 'Gandaki Province',
    altitude: '822 m',
    category: 'Adventure Capital',
    desc: 'Nepal\'s adventure capital. Paraglide above Phewa Lake while the Annapurna massif reflects in still water. A city where rivers, mountains, and sky converge.',
    img: 'https://images.unsplash.com/photo-1735533441842-33c5e47b22ae?w=900&h=600&fit=crop&auto=format',
    icon: <IconWaves />,
  },
  {
    num: '03',
    name: 'Kathmandu Valley',
    region: 'Bagmati Province',
    altitude: '1,400 m',
    category: 'UNESCO Heritage',
    desc: 'Seven monument zones, each a UNESCO World Heritage site. Pashupatinath, Boudhanath, Swayambhunath — ancient temples woven into a living city.',
    img: 'https://images.unsplash.com/photo-1529733905113-027ed85d7e33?w=900&h=600&fit=crop&auto=format',
    icon: <IconCamera />,
  },
  {
    num: '04',
    name: 'Chitwan National Park',
    region: 'Terai Lowlands',
    altitude: '100–800 m',
    category: 'Wildlife Safari',
    desc: 'One-horned rhinos, Bengal tigers, and Gangetic dolphins in Nepal\'s premier jungle reserve. Canoe the Rapti River at dusk among wild elephants.',
    img: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?w=900&h=600&fit=crop&auto=format',
    icon: <IconLeaf />,
  },
  {
    num: '05',
    name: 'Annapurna Circuit',
    region: 'Manang & Mustang',
    altitude: 'Up to 5,416 m',
    category: 'Classic Trek',
    desc: 'A 160-km arc from subtropical jungle to Tibetan plateau. Crossing Thorong La pass, every hour is a different climate, culture, and altitude.',
    img: 'https://images.unsplash.com/photo-1553886334-43d24f24d3bd?w=900&h=600&fit=crop&auto=format',
    icon: <IconCompass />,
  },
  {
    num: '06',
    name: 'Lumbini',
    region: 'Rupandehi District',
    altitude: '100 m',
    category: 'Sacred Birthplace',
    desc: 'Where Siddhartha Gautama — the Buddha — was born in 563 BCE. The Maya Devi Temple and an eternal flame mark the exact spot. Pilgrims arrive from every continent.',
    img: 'https://images.unsplash.com/photo-1507743617593-0a422c9bb7f5?w=900&h=600&fit=crop&auto=format',
    icon: <IconStar />,
  },
]

export default function Places() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="places" className="dark-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c8a96e' }}>Best Places to Visit</span>
            <span className="gold-line" />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08, color: '#f5f0e8' }}>
              Six Worlds<br />Within One Kingdom
            </h2>
          </div>
          <p style={{ maxWidth: 340, fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.55)', fontWeight: 400 }}>
            From the highest point on Earth to ancient temple cities and dense safari jungle — Nepal contains multitudes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'rgba(200,169,110,0.15)' }}>
          {placesData.map((p, i) => (
            <div
              key={p.num}
              className="card-hover"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                background: '#1a1410',
                overflow: 'hidden',
                cursor: 'default',
                minHeight: i < 2 ? 420 : 300,
              }}
            >
              <div className="img-zoom" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: hovered === i ? 'brightness(0.45)' : 'brightness(0.28)',
                    transition: 'filter 0.5s ease',
                  }}
                />
              </div>
              <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div className="place-num">{p.num}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#c8a96e' }}>{p.icon}</span>
                  <span className="tag">{p.category}</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: i < 2 ? '2rem' : '1.5rem', color: '#f5f0e8', marginBottom: '0.5rem', lineHeight: 1.1 }}>{p.name}</h3>
                <p style={{ fontSize: '0.8125rem', color: '#c8a96e', marginBottom: '0.75rem', fontWeight: 500 }}>{p.region} · {p.altitude}</p>
                <p style={{
                  fontSize: '0.875rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.65,
                  maxHeight: hovered === i ? '100px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                  fontWeight: 400,
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 700px) { #places .card-hover { min-height: 260px !important; } #places > div > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}