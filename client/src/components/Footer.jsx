import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { useContactModal } from './ContactModal.jsx'
import { site, tel, whatsappLink } from '../data/site.js'
import { WhatsAppIcon, GithubIcon, LinkedinIcon } from './icons.jsx'

const marqueeItems = ['Talk to a human', "Tell us what you're building", 'Fixed quotes. Real launch dates.', `Thank you for considering ${site.name}`, "Let's build something that works"]

function UgandaFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 30 20" aria-label="Uganda flag" role="img">
      <rect width="30" height="20" fill="#000" /><rect y="3.33" width="30" height="3.33" fill="#FCDC04" />
      <rect y="6.66" width="30" height="3.34" fill="#D90000" /><rect y="13.33" width="30" height="3.33" fill="#FCDC04" />
      <rect y="16.66" width="30" height="3.34" fill="#D90000" /><circle cx="15" cy="10" r="4.1" fill="#fff" />
    </svg>
  )
}

export default function Footer() {
  const { open } = useContactModal()
  const row = (hidden) => (
    <div className="item" aria-hidden={hidden || undefined}>
      {marqueeItems.map((t) => <span key={t} style={{ display: 'flex', alignItems: 'center' }}><span>{t}</span><i /></span>)}
    </div>
  )
  return (
    <footer className="footer">
      <button type="button" className="foot-marquee" onClick={() => open()} aria-label={`Get in touch with ${site.name}`}>
        <div className="marquee" style={{ '--dur': '38s' }}>
          <div className="marquee-track">{row(false)}{row(true)}</div>
        </div>
      </button>

      <div className="container">
        <div className="foot-cta">
          <h2>Let's build yours<span className="text-blue">.</span></h2>
          <button className="btn btn-solid" onClick={() => open()}>Contact Us <ArrowUpRight /></button>
        </div>

        <div className="foot-grid">
          <div>
            <Logo />
            <p>{site.name} is a design studio in {site.location}. We build websites, brands and graphics for growing businesses — serving Africa and beyond. <em>{site.tagline}.</em></p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="foot-links">
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/samples">Samples</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#process">Process</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="foot-links">
              <li><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><small>Phone / WhatsApp</small>
                {site.phones.map((p) => <a key={p} href={tel(p)} style={{ display: 'block' }}>{p}</a>)}
              </li>
            </ul>
            <div className="socials" style={{ marginTop: 18 }}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
            <span>© {new Date().getFullYear()} {site.name}. {site.tagline}.</span>
            <span className="made"><UgandaFlag /> Built by Ugandans</span>
          </div>
          <nav>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
