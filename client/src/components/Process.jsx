import { Reveal, SectionHead } from './ui.jsx'
import { steps } from '../data/site.js'

export default function Process() {
  return (
    <section id="process" className="section alt">
      <div className="deco" style={{ width: 130, height: 130, top: 160, right: 80, borderColor: 'rgba(255,255,255,.1)' }} />
      <div className="deco" style={{ width: 160, height: 160, bottom: 220, right: 220 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead kicker="How We Work" title="Simple" dim="Process" />
        <div className="process-list">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="step">
              <div className="step-n">0{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
