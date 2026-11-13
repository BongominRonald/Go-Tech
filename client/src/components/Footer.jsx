import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { useContactModal } from './ContactModal.jsx'
import { site, tel, whatsappLink } from '../data/site.js'
import { WhatsAppIcon, GithubIcon, LinkedinIcon, BehanceIcon } from './icons.jsx'

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

        {/* Main Footer Directory */}
        <div className="foot-grid">
          {/* Brand Identity & Mission */}
          <div className="foot-brand">
            <Logo />
            <p className="foot-brand-desc">
              {site.name} is a modern design studio & software development practice based in {site.location}. We build high-impact websites, brand systems, and digital tools for ambitious businesses across Africa and worldwide.
            </p>
            <div className="foot-status-badge">
              <span className="foot-pulse-dot" />
              <span>Available for select projects in {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="foot-col foot-explore">
            <h4 className="foot-col-title">Navigation</h4>
            <ul className="foot-nav-links">
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#process">Process</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/samples">Live Demos</Link></li>
            </ul>
          </div>

          {/* Direct Connect Capsule */}
          <div className="foot-col foot-contact">
            <div className="foot-contact-card">
              <h4 className="foot-col-title">Direct Inquiries</h4>

              <div className="foot-contact-items">
                <div className="foot-contact-item">
                  <span className="foot-item-label">
                    <Mail size={12} className="foot-item-icon" /> Email
                  </span>
                  <a href={`mailto:${site.email}`} className="foot-email-link">
                    {site.email}
                  </a>
                </div>

                <div className="foot-contact-item">
                  <span className="foot-item-label">
                    <Phone size={12} className="foot-item-icon" /> Phone / WhatsApp
                  </span>
                  <div className="foot-phone-group">
                    {site.phones.map((p) => (
                      <a key={p} href={tel(p)} className="foot-phone-link">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="foot-contact-item">
                  <span className="foot-item-label">
                    <MapPin size={12} className="foot-item-icon" /> Studio Location
                  </span>
                  <span className="foot-location-text">
                    {site.location} · East Africa
                  </span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="foot-socials-wrap">
                <span className="foot-socials-label">Social Channels</span>
                <div className="socials foot-socials">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                    <WhatsAppIcon size={16} />
                  </a>
                  <a href={site.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance" title="Behance">
                    <BehanceIcon size={16} />
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                    <GithubIcon size={16} />
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
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
            <span className="foot-sep">·</span>
            <button type="button" onClick={() => open()} className="foot-inquire-link">
              Direct Inquiry
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
