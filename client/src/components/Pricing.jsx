import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { useContactModal } from './ContactModal.jsx'
import { pricing, UGX_PER_USD } from '../data/site.js'

const fmt = (amount, cur) => cur === 'UGX'
  ? `UGX ${amount.toLocaleString('en-US')}`
  : `$${Math.round(amount / UGX_PER_USD).toLocaleString('en-US')}`

export default function Pricing() {
  const [cur, setCur] = useState('UGX')
  const { open } = useContactModal()
  return (
    <section id="pricing" className="section alt">
      <div className="deco" style={{ width: 130, height: 130, top: 160, left: 40, borderColor: 'rgba(255,255,255,.1)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead kicker="Pricing" title="Affordable and Premium" />
        <Reveal className="toggle-wrap">
          <small>Show in</small>
          <div className="toggle" role="group" aria-label="Currency">
            {['UGX', 'USD'].map((c) => (
              <button key={c} aria-pressed={cur === c} className={cur === c ? 'on' : ''} onClick={() => setCur(c)}>{c}</button>
            ))}
          </div>
          <span className="toggle-note">Converted at an approximate rate, for guidance only.</span>
        </Reveal>
        <div className="price-grid">
          {pricing.map((p, i) => (
            <Reveal as="article" key={p.id} delay={(i % 3) * 90}>
              <div id={`pricing-${p.id}`} className={`price ${p.popular ? 'popular' : ''}`} style={{ height: '100%' }}>
                {p.popular && <div className="pop-badge">Popular</div>}
                <h3>{p.name}</h3>
                <p className="desc">{p.desc}</p>
                <div className="amount">{p.from && <small>from</small>}<span>{fmt(p.price, cur)}</span></div>
                <p className="time">{p.timeline}</p>
                <ul>{p.features.map((f) => <li key={f}><Check size={18} />{f}</li>)}</ul>
                <button className={`btn btn-block ${p.popular ? 'btn-blue' : ''}`} onClick={() => open(p.name)} aria-haspopup="dialog">{p.cta}</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
