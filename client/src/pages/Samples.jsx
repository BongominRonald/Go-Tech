import { useState } from 'react'
import { ExternalLink, X, ChevronLeft, ChevronRight, Eye, Globe, Lock, CheckCircle2 } from 'lucide-react'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { projects, graphics, site } from '../data/site.js'

export default function Samples() {
  const [activeImg, setActiveImg] = useState(null)

  const openLightbox = (idx) => setActiveImg(idx)
  const closeLightbox = () => setActiveImg(null)
  const prevImg = (e) => {
    e.stopPropagation()
    setActiveImg((i) => (i > 0 ? i - 1 : graphics.length - 1))
  }
  const nextImg = (e) => {
    e.stopPropagation()
    setActiveImg((i) => (i < graphics.length - 1 ? i + 1 : 0))
  }

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
              A curated directory of live web applications, e-commerce storefronts, and brand graphics engineered for real businesses. Click any project to view the live site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Web Projects Showcase (Clean cards with View The Site - NO iframes) */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            kicker="Web Development"
            title="Live Websites &amp; Applications"
            lead="Explore our deployed client systems. Click 'View The Site' to launch any application directly in a new tab."
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
                        View The Site <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Gallery */}
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Selected Graphics"
            title="Graphic &amp; Brand Design"
            dim="Made to stop the scroll"
            lead="Print-ready flyers, posters, and social media brand campaigns crafted for maximum impact and fast delivery."
          />
          <Reveal>
            <div className="gallery">
              {graphics.map((g, idx) => (
                <button
                  type="button"
                  key={g.src}
                  onClick={() => openLightbox(idx)}
                  aria-label={`View ${g.title}`}
                >
                  <img src={g.src} alt={g.title} loading="lazy" />
                  <figcaption>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <Eye size={14} /> {g.title}
                    </span>
                  </figcaption>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImg !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="modal-x" onClick={closeLightbox} aria-label="Close image">
            <X size={20} />
          </button>
          <button className="lb-nav prev" onClick={prevImg} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <img
            src={graphics[activeImg].src}
            alt={graphics[activeImg].title}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lb-nav next" onClick={nextImg} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  )
}
