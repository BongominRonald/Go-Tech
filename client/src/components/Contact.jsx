import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { Reveal, SectionHead } from './ui.jsx'
import { site, tel, whatsappLink } from '../data/site.js'
import { WhatsAppIcon, GithubIcon, LinkedinIcon } from './icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead
          kicker="Real-Time Contact"
          title="Let's Build"
          dim="Together"
          lead="Connect directly in real time. No waiting on database queues — speak directly with the founder via WhatsApp or direct email."
        />
        <div className="contact-grid">
          <Reveal><ContactForm idPrefix="contact" /></Reveal>
          <Reveal delay={120}>
            <div className="info-card">
              <h3>Get In Touch</h3>
              <a className="wa-btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat on WhatsApp</a>
              <p className="info-note">Prefer WhatsApp? Start with a ready-made message and talk to a human.</p>
              <div className="info-row">
                <div className="info-ico"><Mail size={18} /></div>
                <div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div>
              </div>
              <div className="info-row">
                <div className="info-ico"><Phone size={18} /></div>
                <div><small>Phone / WhatsApp</small>
                  {site.phones.map((p) => <a key={p} href={tel(p)} style={{ display: 'block' }} dir="ltr">{p}</a>)}
                </div>
              </div>
              <div className="info-row">
                <div className="info-ico"><MapPin size={18} /></div>
                <div><small>Address</small><address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,.8)' }}>{site.location}<br />East Africa<br />Worldwide</address></div>
              </div>
              <small style={{ display: 'block', marginBottom: 12, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Social</small>
              <div className="socials">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
