import { Code2, Palette, TrendingUp, ArrowUpRight, ExternalLink } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { services, site } from '../data/site.js'
import { BehanceIcon } from './icons.jsx'

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
            const isGraphic = s.id === 'graphic'
            return (
              <Reveal as="article" key={s.id} delay={idx * 100}>
                <div className="svc">
                  <div className="svc-top-bar">
                    <span className="svc-num">0{idx + 1}</span>
                    <div className="svc-icon"><Icon size={22} /></div>
                  </div>
                  <div className="svc-body">
                    <h3>{s.title}</h3>
                    <p className="need">{s.need}</p>
                    <p className="why">{s.why}</p>
                    {isGraphic ? (
                      <a
                        href={site.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="more svc-behance-link"
                      >
                        <BehanceIcon size={14} /> View Work on Behance <ExternalLink size={13} />
                      </a>
                    ) : (
                      <a href={s.href} className="more">
                        See pricing <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
