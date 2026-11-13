import { ExternalLink, Globe, Lock, CheckCircle2, Sparkles, Palette } from 'lucide-react'
import { Reveal, SectionHead } from './ui.jsx'
import { projects, site } from '../data/site.js'
import { BehanceIcon } from './icons.jsx'

export default function LiveSample() {
  return (
    <section id="projects" className="section alt">
      <div className="deco" style={{ width: 160, height: 160, top: 80, right: 80 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead
          kicker="Software Portfolio"
          title="Deployed Systems"
          dim="&amp; Web Platforms"
          lead="Each software product below details what the platform is about, its key specifications, and live status. Click 'View The Site' to inspect any complete live site in a new tab."
        />

        {/* E-Commerce Software Product Cards Grid */}
        <div className="software-ecommerce-grid">
          {projects.map((p, idx) => (
            <Reveal as="article" key={p.name} delay={(idx % 3) * 80}>
              <div className="software-product-card">
                {/* Product Header / Visual Showcase */}
                <div className="product-card-top">
                  <div className="product-badge-row">
                    <span className="product-category-badge">{p.tag}</span>
                    <span className="product-live-badge">
                      <span className="live-dot" /> Live System
                    </span>
                  </div>

                  {/* Product Emblem / Monogram & Name */}
                  <div className="product-emblem-wrap">
                    <div
                      className="product-monogram"
                      style={{
                        borderColor: p.accent || 'var(--blue)',
                        color: p.accent || 'var(--blue)',
                        boxShadow: `0 0 24px ${p.accent ? `${p.accent}20` : 'rgba(0,174,239,0.15)'}`
                      }}
                    >
                      <span>{p.monogram}</span>
                    </div>
                    <div className="product-title-group">
                      <span className="product-type-tag">{p.productType}</span>
                      <h3 className="product-title">{p.name}</h3>
                      <div className="product-domain-pill">
                        <Lock size={11} style={{ color: p.accent || 'var(--blue)' }} />
                        <span>https://{p.domain}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Body: "What is it about" */}
                <div className="product-card-body">
                  <div className="product-section-block">
                    <span className="product-subhead">What It Is About</span>
                    <p className="product-about-text">{p.desc}</p>
                  </div>

                  {/* Core Features / Specs */}
                  <div className="product-section-block">
                    <span className="product-subhead">Key Capabilities</span>
                    <div className="product-specs-list">
                      {p.features?.map((f) => (
                        <span key={f} className="product-spec-pill">
                          <CheckCircle2 size={12} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                          <span>{f}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Card Action / CTA Bar */}
                <div className="product-card-footer">
                  <div className="product-deployment-meta">
                    <span className="meta-label">Deployment</span>
                    <span className="meta-val">Vercel Cloud</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-solid btn-view-site"
                    title={`View ${p.name} live in a new tab`}
                  >
                    View The Site <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
                Looking for our graphic design work? All logos, flyers, posters, and brand identities are showcased live on Behance. Click below to view the verified creative portfolio in a new tab.
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
