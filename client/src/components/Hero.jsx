import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { LogoMark } from './Logo.jsx'
import { CountUp, Reveal } from './ui.jsx'
import { site, stats } from '../data/site.js'

const rotating = ['SOFTWARE', 'GRAPHICS', 'DIGITAL TOOLS']

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % rotating.length), 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-inner">
          <div>
            <Reveal>
              <div className="badge">
                software Development · {site.location.split(',')[0]} · Serving Africa and beyond
              </div>
            </Reveal>

            <h1>
              <span className="line"><span style={{ '--d': '.15s' }}>GO-TECH</span></span>
              <span className="line dim"><span style={{ '--d': '.28s' }}>FOR REAL</span></span>
              <span className="line blue"><span style={{ '--d': '.41s' }}>SOLUTIONS</span></span>
            </h1>

            <div className="switcher">
              <small>PREMIUM</small>
              <span className="sr-only">Premium softwares, graphics and digital tools</span>
              <span className="switcher-word" aria-hidden="true">
                <span key={i}>{rotating[i]}</span>
              </span>
            </div>

            <Reveal delay={200}>
              <p className="hero-desc">
                We put growing businesses online with softwares, graphics and digital tools that turn visitors into customers. A focused team, amplified by AI.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-solid">
                  Start Your Project <ArrowRight size={16} />
                </a>
                <a href="#pricing" className="btn btn-ghost">
                  See Pricing
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="hero-art">
            <div className="back" />
            <div className="frame">
              <div className="mark">
                <LogoMark size={200} />
              </div>
            </div>
            <div className="chip c1"><i /> Mobile-first</div>
            <div className="chip c2"><i /> Fixed UGX quotes</div>
          </Reveal>
        </div>

        <Reveal as="dl" className="stats" style={{ margin: '64px 0 0' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="stat-num" style={{ margin: 0 }}>
                <CountUp to={s.count} suffix={s.suffix} />
              </dd>
              <dd className="stat-line" style={{ marginLeft: 0 }} />
              <dd className="stat-label" style={{ margin: 0 }}>{s.label}</dd>
            </div>
          ))}
        </Reveal>

        <div className="scroll-cue">
          <a href="#services">
            Build <i /> <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
