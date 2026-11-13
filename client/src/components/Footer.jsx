import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
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
    <footer className="footer">
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
        <div className="foot-cta">
          <div>
            <h2>Let's build yours<span className="text-blue">.</span></h2>
          </div>
          <button className="btn btn-solid" onClick={() => open()}>
            Contact Us <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p>
              {site.name} is a design studio in {site.location}. We build websites, brands and graphics for growing businesses — serving Africa and beyond. <em>{site.tagline}.</em>
            </p>
          </div>

          <div className="foot-col foot-explore">
            <h4>Explore</h4>
            <ul className="foot-links">
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#process">Process</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className="foot-col foot-contact">
            <h4>Contact</h4>
            <ul className="foot-links">
              <li>
                <small>Email</small>
                <a href={`mailto:${site.email}`} className="foot-email-link">
                  {site.email}
                </a>
              </li>
              <li>
                <small>Phone / WhatsApp</small>
                {site.phones.map((p) => (
                  <a key={p} href={tel(p)} className="foot-phone-link">
                    {p}
                  </a>
                ))}
              </li>
            </ul>
            <div className="socials" style={{ marginTop: 14 }}>
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

        {/* Centered, Elegant and Balanced Footer Bottom */}
        <div className="foot-bottom">
          <div className="foot-bottom-row">
            <span>© {new Date().getFullYear()} {site.name}.</span>
            <span className="foot-sep">·</span>
            <span className="made"><UgandaFlag /> Built by Ugandans</span>
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
