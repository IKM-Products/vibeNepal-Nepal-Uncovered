import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '8,849 m', label: 'Mount Everest', detail: 'Highest point on Earth' },
  { value: '125+', label: 'Ethnic Groups', detail: 'Over 100 spoken languages' },
  { value: '8+', label: 'UNESCO Sites', detail: 'World Heritage monuments' },
  { value: '81%', label: 'Hindu Population', detail: 'Largest Hindu nation by %' },
  { value: '29M+', label: 'Population', detail: 'People across 77 districts' },
  { value: 'UTC+5:45', label: 'Time Zone', detail: 'One of only 3 in the world with :45' },
]

export default function Facts() {
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

          <div style={{ border: '1px solid rgba(200,169,110,0.2)', padding: '3rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.625rem', color: '#c8a96e', marginBottom: '2rem' }}>Nepal Essentials</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {[
                { q: 'Government', a: 'Federal Democratic Republic since 2008, ending 240 years of Shah dynasty rule.' },
                { q: 'Currency', a: 'Nepalese Rupee (NPR). 1 USD ≈ 152 NPR as of 2026.' },
                { q: 'Climate Zones', a: '5 zones, from warm Terai plains to high Himalayan landscapes, all within 200 km north to south.' },
                { q: 'Best Time to Visit', a: 'October–November (post-monsoon) and March–May (pre-monsoon rhododendron bloom).' },
                { q: 'National Animal', a: 'The Cow, sacred and legally protected throughout the country.' },
                { q: 'National Flower', a: 'Rhododendron (Lali Gurans), blooms across Himalayan hillsides every spring.' },
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