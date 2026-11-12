import { Code2, Palette, TrendingUp, ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { services } from '../data/site.js'

const icons = { web: Code2, graphic: Palette, seo: TrendingUp }

export default function Services() {
  return (
    <section id="services" className="section grad">
      <div className="glow" style={{ width: 260, height: 260, top: 60, right: 40 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead kicker="What We Do" title="Design. Build." dim="Launch." />
        <div className="grid-3">
          {services.map((s, idx) => {
            const Icon = icons[s.id]
            return (
              <Reveal as="article" key={s.id} delay={idx * 100}>
                <a href={s.href} className="svc">
                  <div className="svc-img">
                    <img src={s.image} alt="" loading="lazy" />
                    <span className="svc-num">0{idx + 1}</span>
                  </div>
                  <div className="svc-body">
                    <div className="svc-head">
                      <div className="svc-icon"><Icon size={20} /></div>
                      <h3>{s.title}</h3>
                    </div>
                    <p className="need">{s.need}</p>
                    <p className="why">{s.why}</p>
                    <span className="more">See pricing <ArrowUpRight size={14} /></span>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
