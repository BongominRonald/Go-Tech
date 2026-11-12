import { ExternalLink, Globe, Lock, CheckCircle2, Sparkles, Palette } from 'lucide-react'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { projects, site } from '../data/site.js'
import { BehanceIcon } from '../components/icons.jsx'

export default function Samples() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="deco" style={{ width: 180, height: 180, top: 40, right: 60 }} />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="kicker">Portfolio &amp; Showcase</div>
            <h1 className="title">
              Our Work,<br /><span className="dim">Built To Perform.</span>
            </h1>
            <p className="lead">
              Information on our production web applications, e-commerce storefronts, and creative brand design systems. Click 'View Live Site' on any project to inspect the live application in a new tab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Web Projects Showcase (Information Only with View Live Site in New Tab) */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            kicker="Web Development"
            title="Live Websites &amp; Applications"
            lead="Review technical information and capabilities below. Open any application to see it live in a new tab."
          />

          <div className="grid-3">
            {projects.map((p, idx) => (
              <Reveal as="article" key={p.name} delay={(idx % 3) * 90}>
                <div className="clean-project-card">
                  {/* Clean Mock Browser Bar */}
                  <div className="card-browser-bar">
                    <div className="dots"><i /><i /><i /></div>
                    <div className="card-browser-url">
                      <Lock size={11} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                      <span>{p.domain}</span>
                    </div>
                  </div>

                  {/* Card Visual Banner */}
                  <div className="card-visual-banner" style={{ background: `linear-gradient(135deg, #121214, #080809)` }}>
                    <div className="banner-badge-row">
                      <span className="tag">{p.tag}</span>
                      <span className="live-pill"><i /> Live</span>
                    </div>
                    <h3 className="banner-title">{p.name}</h3>
                    <div className="banner-domain">
                      <Globe size={13} /> https://{p.domain}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body-content">
                    <p className="card-description">{p.desc}</p>

                    <div className="card-features-list">
                      {p.features?.map((f) => (
                        <span key={f} className="feature-item">
                          <CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> {f}
                        </span>
                      ))}
                    </div>

                    <div className="card-action-wrap">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-solid btn-block"
                      >
                        View Live Site <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Showcase (Live Behance Portfolio Integration) */}
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Creative &amp; Visual Design"
            title="Graphic &amp; Brand Design"
            dim="Live on Behance"
            lead="Explore our verified creative portfolio on Behance — featuring digital logos, print-ready flyers, event posters, and brand campaigns."
          />
          <Reveal>
            <div className="behance-showcase-card">
              <div className="behance-content">
                <div className="behance-badge-row">
                  <span className="behance-pill">
                    <BehanceIcon size={16} /> Official Behance Profile
                  </span>
                  <span className="tag">Creative Showcase</span>
                </div>
                <h3 className="behance-title">Bongomin Ronald — Creative Portfolio</h3>
                <p className="behance-desc">
                  All graphic design work, visual identity systems, promotional flyers, posters, and brand design assets are published and maintained live on Behance. Click below to inspect our full creative catalog in a new tab.
                </p>
                <div className="behance-tags">
                  <span className="feature-pill"><Palette size={13} style={{ color: 'var(--blue)' }} /> Brand Identities</span>
                  <span className="feature-pill"><Sparkles size={13} style={{ color: 'var(--blue)' }} /> Promotional Flyers</span>
                  <span className="feature-pill"><CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> Event Posters</span>
                  <span className="feature-pill"><CheckCircle2 size={13} style={{ color: 'var(--blue)' }} /> Social Media Visuals</span>
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
    </div>
  )
}
