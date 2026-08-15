import { useState, useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('in') },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const IconMountain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 20l6-10 4 6 3-4 5 8H3z" />
  </svg>
)
const IconCompass = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)
const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.7-.7 4.33-.7 6.68 2.3 2-3.5 5.94-7.3 9.5-11.8L17 8z" />
  </svg>
)
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const IconWaves = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2V21H2z" />
  </svg>
)
const IconPeople = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconCamera = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)
const IconFlag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
)

const places = [
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

const attractions = [
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

const stats = [
  { value: '8,849 m', label: 'Mount Everest', detail: 'Highest point on Earth' },
  { value: '126+', label: 'Ethnic Groups', detail: 'Over 100 spoken languages' },
  { value: '7', label: 'UNESCO Sites', detail: 'World Heritage monuments' },
  { value: '80%', label: 'Hindu Population', detail: 'Largest Hindu nation by %' },
  { value: '29M', label: 'Population', detail: 'People across 77 districts' },
  { value: 'UTC+5:45', label: 'Time Zone', detail: 'One of only 3 in the world with :45' },
]

const foods = [
  { name: 'Dal Bhat', sub: 'The National Dish', desc: 'Lentil soup with steamed rice, seasonal vegetables, achaar pickle, and often goat curry. Eaten twice daily by most Nepalis — the fuel of the Himalayas.', img: 'https://images.unsplash.com/photo-1552353338-0944fa7abdcd?w=500&h=360&fit=crop&auto=format' },
  { name: 'Momo', sub: 'Street Soul Food', desc: 'Steamed or fried dumplings filled with buff, pork, or vegetables, served with fiery sesame-tomato achar. Nepal\'s most beloved street food by a landslide.', img: 'https://images.unsplash.com/photo-1577398867427-405a8b8ab740?w=500&h=360&fit=crop&auto=format' },
  { name: 'Thukpa', sub: 'High-Altitude Warmth', desc: 'A Tibetan noodle broth loaded with vegetables or yak meat, spiced with ginger and chili. The defining dish of teahouse culture on mountain trails.', img: 'https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=500&h=360&fit=crop&auto=format' },
]

function Navbar() {
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
        <a href="#places" className="btn-primary hidden-mobile" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}>
          Plan Your Trip
        </a>
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

function Hero() {
  const [py, setPy] = useState(0)
  useEffect(() => {
    const h = () => setPy(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <section id="top" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden', background: '#1a1410' }}>
      {/* Parallax image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1800&h=1000&fit=crop&auto=format)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: `translateY(${py * 0.35}px)`,
        filter: 'brightness(0.55) saturate(0.8)',
      }} />
      {/* Gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,20,16,0.85) 0%, rgba(26,20,16,0.3) 60%, transparent 100%)' }} />

      {/* Content */}
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
            Eight of the world's ten highest peaks. A hundred civilizations. Five thousand years of unbroken culture. Nepal does not whisper. It roars.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.8s ease 0.8s both' }}>
            <a href="#places" className="btn-primary">Explore Nepal</a>
            <a href="#about" className="btn-outline" style={{ color: '#f5f0e8', borderColor: 'rgba(245,240,232,0.4)' }}>Our Story</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
        borderTop: '1px solid rgba(245,240,232,0.1)',
        display: 'flex', overflow: 'hidden',
      }}>
        {[
          { val: '8,849 m', lab: 'Mt. Everest' },
          { val: '126+', lab: 'Ethnic Groups' },
          { val: '7', lab: 'UNESCO Sites' },
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

function About() {
  const ref = useReveal()
  return (
    <section id="about" className="sand-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">About the Country</span>
            <span className="gold-line" />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', lineHeight: 1.08, marginBottom: '2rem', color: '#1a1410' }}>
              A Nation Carved<br />by Gods & Mountains
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.0125rem', lineHeight: 1.8, color: '#4a3f36', fontWeight: 400 }}>
              <p>Nepal is a landlocked sovereign republic between China and India, occupying the central Himalayas. It holds eight of the world's ten highest peaks — including Everest, Kanchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu, and Annapurna.</p>
              <p>From the steaming Terai jungle at 60 metres to arctic summits above 8,000 metres, Nepal compresses an entire planet's worth of ecology into a country the size of Arkansas. The vertical drop is unlike anywhere else on Earth.</p>
              <p>Once the world's only Hindu kingdom, Nepal became a federal democratic republic in 2008, ending 240 years of Shah dynasty rule. Yet Buddhism, Animism, and dozens of folk traditions interweave with Hinduism in a syncretic culture scholars travel lifetimes to map.</p>
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

function Places() {
  const ref = useReveal()
  const [hovered, setHovered] = useState<number | null>(null)

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

        {/* 2+4 grid layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'rgba(200,169,110,0.15)' }}>
          {places.map((p, i) => (
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

function Attractions() {
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
            {attractions.map((a, i) => (
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

function Culture() {
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

          {/* Tab buttons */}
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

          {/* Active panel */}
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

          {/* People facts row */}
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

function Cuisine() {
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

function Facts() {
  const ref = useReveal()
  return (
    <section id="facts" className="dark-section" style={{ padding: '7rem 4vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c8a96e' }}>Key Facts</span>
            <span className="gold-line" style={{ margin: '1rem auto' }} />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08, color: '#f5f0e8' }}>
              Nepal by the Numbers
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(200,169,110,0.15)', marginBottom: '4rem' }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: '3rem 2rem', textAlign: 'center', background: '#1a1410',
                borderBottom: i < 3 ? '1px solid rgba(200,169,110,0.1)' : 'none',
              }}>
                <div className="font-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: '#c8a96e', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f5f0e8', marginBottom: '0.35rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.4)', fontWeight: 400 }}>{s.detail}</div>
              </div>
            ))}
          </div>

          {/* Essentials table */}
          <div style={{ border: '1px solid rgba(200,169,110,0.2)', padding: '3rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.625rem', color: '#c8a96e', marginBottom: '2rem' }}>Nepal Essentials</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {[
                { q: 'Government', a: 'Federal Democratic Republic since 2008, ending 240 years of Shah dynasty rule.' },
                { q: 'Currency', a: 'Nepalese Rupee (NPR). 1 USD ≈ 134 NPR as of 2024.' },
                { q: 'Climate Zones', a: '5 zones — from tropical Terai to arctic alpine — all within 200 km north–south.' },
                { q: 'Best Time to Visit', a: 'October–November (post-monsoon) and March–May (pre-monsoon rhododendron bloom).' },
                { q: 'National Animal', a: 'The Cow — sacred and legally protected throughout the country.' },
                { q: 'National Flower', a: 'Rhododendron (Lali Gurans) — blazes red across Himalayan hillsides every spring.' },
              ].map((item, i) => (
                <div key={item.q} style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid rgba(200,169,110,0.1)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(200,169,110,0.1)' : 'none',
                  display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1rem', alignItems: 'start',
                }}>
                  <dt style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8a96e', paddingTop: '0.15rem' }}>{item.q}</dt>
                  <dd style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(245,240,232,0.6)', fontWeight: 400 }}>{item.a}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 700px) { #facts .reveal > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; } #facts .reveal > div:last-child > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
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
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.3)', fontWeight: 400 }}>vibeNepal: Nepal Uncovered © 2025</p>
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
