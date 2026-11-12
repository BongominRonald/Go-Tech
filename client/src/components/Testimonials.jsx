import { Star, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { testimonials, projects } from '../data/site.js'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead kicker="Testimonials" title="What Clients" dim="Say" />
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <Reveal as="article" key={t.name} delay={(i % 3) * 90}>
              <div className="testi">
                <div className="stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} size={16} fill={n < t.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
                  ))}
                </div>
                <blockquote>“{t.quote}”</blockquote>
                <div className="who"><div><b>{t.name}</b><span>{t.role}</span></div></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Trust() {
  const names = [...projects.map((p) => p.name), 'Roomify']
  const row = (hidden) => (
    <div aria-hidden={hidden || undefined}>
      {names.map((n) => <span key={n} className="client-name">{n}</span>)}
    </div>
  )
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="container">
        <SectionHead kicker="Proven" title="Tested, Approved and Trusted"
          dim="Every site is checked on real devices, in real browsers, before it reaches you." />
        <Reveal className="trust-label"><ShieldCheck size={20} /> Trusted by teams at</Reveal>
      </div>
      <Reveal className="marquee">
        <div className="marquee-track">{row(false)}{row(true)}</div>
      </Reveal>
    </section>
  )
}
