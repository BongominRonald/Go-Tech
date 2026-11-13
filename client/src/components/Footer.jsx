import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { useContactModal } from './ContactModal.jsx'
import { site } from '../data/site.js'

const marqueeItems = [
  'Talk to a human',
  "Tell us what you're building",
  'Fixed quotes. Real launch dates.',
  `Thank you for considering ${site.name}`,
  "Let's build something that works",
]

function UgandaFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 30 20" aria-label="Uganda flag" role="img" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <rect width="30" height="20" fill="#000" />
      <rect y="3.33" width="30" height="3.33" fill="#FCDC04" />
      <rect y="6.66" width="30" height="3.34" fill="#D90000" />
      <rect y="13.33" width="30" height="3.33" fill="#FCDC04" />
      <rect y="16.66" width="30" height="3.34" fill="#D90000" />
      <circle cx="15" cy="10" r="4.1" fill="#fff" />
    </svg>
  )
}

export default function Footer() {
  const { open } = useContactModal()
  const row = (hidden) => (
    <div className="item" aria-hidden={hidden || undefined}>
      {marqueeItems.map((t) => (
        <span key={t} style={{ display: 'flex', alignItems: 'center' }}>
          <span>{t}</span>
          <i />
        </span>
      ))}
    </div>
  )

  return (
    <footer className="footer" id="site-footer">
      {/* Brand Marquee Ticker */}
      <button
        type="button"
        className="foot-marquee"
        onClick={() => open()}
        aria-label={`Get in touch with ${site.name}`}
      >
        <div className="marquee" style={{ '--dur': '38s' }}>
          <div className="marquee-track">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </button>

      <div className="container">
        {/* Editorial Action Banner */}
        <div className="foot-cta">
          <div className="foot-cta-info">
            <span className="foot-cta-kicker">
              <span className="foot-status-dot" /> Ready to Launch?
            </span>
            <h2>Let's build yours<span className="text-blue">.</span></h2>
            <p className="foot-cta-desc">Fixed UGX quotes · Guaranteed launch dates · Direct human contact</p>
          </div>
          <div className="foot-cta-action">
            <button className="btn btn-solid foot-btn-cta" onClick={() => open()}>
              Start Your Project <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Main Footer Directory: Brand & Organized Navigation Links */}
        <div className="foot-grid">
          {/* Brand Identity & Mission */}
          <div className="foot-brand">
            <Logo />
            <p className="foot-brand-desc">
              {site.name} is a modern design studio & software development practice based in {site.location}. We build high-impact software, brand systems, and digital tools for ambitious businesses across Africa and worldwide.
            </p>
            <div className="foot-status-badge">
              <span className="foot-pulse-dot" />
              <span>Available for select projects in {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Navigation Category 1: Explore */}
          <div className="foot-col foot-nav-col">
            <h4 className="foot-col-title">Explore</h4>
            <ul className="foot-nav-links">
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#pricing">Pricing Plans</Link></li>
              <li><Link to="/samples">Live Demos</Link></li>
            </ul>
          </div>

          {/* Navigation Category 2: Studio */}
          <div className="foot-col foot-nav-col">
            <h4 className="foot-col-title">Studio</h4>
            <ul className="foot-nav-links">
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/#process">Our Process</Link></li>
              <li><Link to="/#testimonials">Client Reviews</Link></li>
              <li>
                <button type="button" onClick={() => open()} className="foot-link-btn">
                  Start an Inquiry
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered, Pristine Footer Bottom */}
        <div className="foot-bottom">
          <div className="foot-bottom-row">
            <span>© {new Date().getFullYear()} {site.name} Solutions.</span>
            <span className="foot-sep">·</span>
            <span className="made"><UgandaFlag /> Built with precision in Uganda</span>
          </div>
          <nav className="foot-bottom-nav">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="foot-sep">·</span>
            <Link to="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
