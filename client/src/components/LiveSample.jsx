import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Globe, Lock, Sparkles, CheckCircle2 } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { projects } from '../data/site.js'

export default function LiveSample() {
  const [active, setActive] = useState(0)
  const current = projects[active]

  return (
    <section id="samples" className="section alt">
      <div className="deco" style={{ width: 160, height: 160, top: 80, right: 80 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead
          kicker="Featured Work"
          title="Selected Projects"
          dim="Built &amp; Deployed"
          lead="Explore our live client applications and custom web solutions. Click any project to visit the live site."
        />

        {/* Tab switcher */}
        <Reveal>
          <div className="tabs" role="tablist" aria-label="Choose a project">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`tab ${i === active ? 'on' : ''}`}
                onClick={() => setActive(i)}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Clean Mockup Card (No embedded iframe) */}
          <div className="site-showcase-frame">
            <div className="browser-bar">
              <div className="dots"><i /><i /><i /></div>
              <div className="url">
                <Lock size={12} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                <span dir="ltr">https://{current.domain}</span>
              </div>
              <span className="live"><i /> Live</span>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-solid"
                style={{ marginLeft: 'auto', padding: '6px 14px', fontSize: '11px' }}
              >
                View The Site <ExternalLink size={13} />
              </a>
            </div>

            <div className="site-showcase-content">
              <div className="showcase-left">
                <div className="showcase-tag-row">
                  <span className="tag">{current.tag}</span>
                  <span className="showcase-status">
                    <span className="status-indicator" style={{ background: current.accent || 'var(--blue)' }} />
                    Production Ready
                  </span>
                </div>

                <h3 className="showcase-title">{current.name}</h3>
                <p className="showcase-desc">{current.desc}</p>

                <div className="showcase-features">
                  {current.features?.map((f) => (
                    <span key={f} className="feature-pill">
                      <CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> {f}
                    </span>
                  ))}
                </div>

                <div className="showcase-actions">
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-solid"
                  >
                    View The Site <ExternalLink size={15} />
                  </a>
                  <Link to="/samples" className="btn btn-ghost">
                    All Projects <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="showcase-right">
                <div className="mockup-preview-card">
                  <div className="mockup-header-line">
                    <Globe size={18} style={{ color: current.accent || 'var(--blue)' }} />
                    <span className="domain-text">{current.domain}</span>
                  </div>
                  <div className="mockup-body-visual">
                    <div className="mock-grid">
                      <div className="mock-box highlight" style={{ borderColor: current.accent || 'var(--blue)' }}>
                        <span className="mock-label">Deployment</span>
                        <strong>Vercel Cloud</strong>
                      </div>
                      <div className="mock-box">
                        <span className="mock-label">Architecture</span>
                        <strong>React &amp; Modern Web</strong>
                      </div>
                      <div className="mock-box">
                        <span className="mock-label">Optimisation</span>
                        <strong>Mobile-First &amp; Fast</strong>
                      </div>
                      <div className="mock-box">
                        <span className="mock-label">Status</span>
                        <strong style={{ color: '#28c840' }}>100% Operational</strong>
                      </div>
                    </div>
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-site-banner"
                    >
                      <span>Explore {current.name} live</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Clean quick grid below */}
        <Reveal style={{ marginTop: 48 }}>
          <div className="grid-3">
            {projects.slice(0, 3).map((p) => (
              <div key={p.name} className="quick-site-card">
                <div className="quick-site-header">
                  <span className="tag">{p.tag}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-site-link"
                    title={`View ${p.name}`}
                  >
                    View Site <ExternalLink size={13} />
                  </a>
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="quick-site-domain">
                  <Globe size={13} /> {p.domain}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 32, textAlign: 'center' }}>
          <Link to="/samples" className="btn">
            View All Sites &amp; Graphics <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
