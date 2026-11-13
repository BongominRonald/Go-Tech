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
            <div className="kicker">Software Catalog &amp; Portfolio</div>
            <h1 className="title">
              Our Work,<br /><span className="dim">Built To Perform.</span>
            </h1>
            <p className="lead">
              A structured catalog of deployed client software systems, e-commerce storefronts, and web platforms. Review what each product is about, and click 'View Software' to launch any live software in a new tab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Web Projects Showcase (E-Commerce Software Product Cards) */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            kicker="Web Development"
            title="Live Software Systems"
            lead="Review technical information and capabilities below. Open any application to see it live in a new tab."
          />

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
                      <span className="product-subhead">Key Specifications</span>
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
                      View Software <ExternalLink size={14} />
                    </a>
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
