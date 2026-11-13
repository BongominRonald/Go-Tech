import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
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
          <div className="hero-text-block">
            <Reveal>
              <div className="badge">
                Software Development · {site.location.split(',')[0]} · Serving Africa and beyond
              </div>
            </Reveal>

            <div className="hero-headline-row">
              <div className="hero-heading-col">
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
              </div>

              {/* Mobile companion mouse visual (sits beside the words, partly toned) */}
              <div className="hero-art-mobile" aria-hidden="true">
                <div className="hero-mouse-glow" />
                <div className="hero-mouse-wrapper">
                  <picture>
                    <source srcSet="/hero-mouse.webp" type="image/webp" />
                    <img
                      src="/hero-mouse.png"
                      alt="Go-Tech miniature software development office inside a mouse"
                      className="hero-mouse-img"
                      width="260"
                      height="260"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                </div>
              </div>
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

          <Reveal delay={300} className="hero-art hero-art-desktop">
            <div className="hero-mouse-glow" />
            <div className="hero-mouse-wrapper">
              <picture>
                <source srcSet="/hero-mouse.webp" type="image/webp" />
                <img
                  src="/hero-mouse.png"
                  alt="Go-Tech miniature software development office inside a computer mouse"
                  className="hero-mouse-img"
                  width="540"
                  height="540"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
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
