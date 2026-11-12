import { useState } from 'react'
import { ExternalLink, Globe, Lock, CheckCircle2, Sparkles, Palette } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { projects, site } from '../data/site.js'
import { BehanceIcon } from './icons.jsx'

export default function LiveSample() {
  const [active, setActive] = useState(0)
  const current = projects[active]

  return (
    <section id="projects" className="section alt">
      <div className="deco" style={{ width: 160, height: 160, top: 80, right: 80 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead
          kicker="Portfolio &amp; Work"
          title="Selected Projects"
          dim="Information &amp; Live Systems"
          lead="Detailed information on our production web applications. To inspect any complete platform, open the live site in a new tab."
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

          {/* Clean Mockup Information Card */}
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
                View Live Site <ExternalLink size={13} />
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
                    View Live Site in New Tab <ExternalLink size={15} />
                  </a>
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
                        <strong>Vercel Global Cloud</strong>
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
                      <span>Launch {current.name}</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Complete Directory of All 6 Projects (Information Only with View Live Link) */}
        <Reveal style={{ marginTop: 48 }}>
          <div className="grid-3">
            {projects.map((p) => (
              <div key={p.name} className="quick-site-card">
                <div className="quick-site-header">
                  <span className="tag">{p.tag}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-site-link"
                    title={`View ${p.name} in new tab`}
                  >
                    View Live <ExternalLink size={13} />
                  </a>
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="card-features-list" style={{ marginTop: 4 }}>
                  {p.features?.map((f) => (
                    <span key={f} className="feature-item" style={{ fontSize: '10px' }}>
                      <CheckCircle2 size={11} style={{ color: 'var(--blue)' }} /> {f}
                    </span>
                  ))}
                </div>
                <div className="quick-site-domain">
                  <Globe size={13} /> {p.domain}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Live Behance Graphic Design Showcase Card */}
        <Reveal style={{ marginTop: 56 }}>
          <div className="behance-showcase-card">
            <div className="behance-content">
              <div className="behance-badge-row">
                <span className="behance-pill">
                  <BehanceIcon size={16} /> Official Portfolio
                </span>
                <span className="tag">Graphic &amp; Brand Design</span>
              </div>
              <h3 className="behance-title">Graphic Design &amp; Brand Identity on Behance</h3>
              <p className="behance-desc">
                From digital logos and print-ready flyers to complete brand identity systems and social media campaigns. Explore our verified creative portfolio directly on Behance.
              </p>
              <div className="behance-tags">
                <span className="feature-pill"><Palette size={13} style={{ color: 'var(--blue)' }} /> Brand Identity</span>
                <span className="feature-pill"><Sparkles size={13} style={{ color: 'var(--blue)' }} /> Flyers &amp; Posters</span>
                <span className="feature-pill"><CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> Social Media Campaigns</span>
                <span className="feature-pill"><CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> Print &amp; Digital Media</span>
              </div>
            </div>
            <div className="behance-action-wrap">
              <a
                href={site.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid btn-behance"
              >
                <BehanceIcon size={18} /> View Creative Portfolio on Behance <ExternalLink size={15} />
              </a>
              <span className="behance-subtext">Opens live portfolio at behance.net/bongominronald</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
