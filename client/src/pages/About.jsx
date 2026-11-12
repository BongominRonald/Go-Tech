import { Link } from 'react-router-dom'
import { Sparkles, Terminal, Shield, Zap, ArrowRight } from 'lucide-react'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { site, whatsappLink } from '../data/site.js'
import { LogoMark } from '../components/Logo.jsx'
import { useContactModal } from '../components/ContactModal.jsx'
import { WhatsAppIcon, GithubIcon, LinkedinIcon } from '../components/icons.jsx'

const values = [
  {
    icon: Sparkles,
    title: 'Focused & AI-Amplified',
    desc: 'We combine human software craft with intelligent tools to build faster, reduce turnaround time, and maintain high visual quality.',
  },
  {
    icon: Terminal,
    title: 'Real Engineering',
    desc: 'Clean code, modern React & Node architectures, responsive on actual Android & iOS handsets, and fast loading speeds.',
  },
  {
    icon: Shield,
    title: 'Transparent & Fixed Quotes',
    desc: 'No hidden surcharges or vague estimates. We give fixed UGX quotes and launch dates in writing before we begin.',
  },
  {
    icon: Zap,
    title: 'Client Ownership',
    desc: 'Once your final invoice is settled, you own all delivered code, assets, and design files outright with 2-4 weeks post-launch support.',
  },
]

export default function About() {
  const { open } = useContactModal()

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <section className="page-hero">
        <div className="deco" style={{ width: 140, height: 140, top: 40, right: 60 }} />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="kicker">About Us</div>
            <h1 className="title">
              The Studio<span className="text-blue">.</span><br />
              <span className="dim">Crafted for Growth.</span>
            </h1>
            <p className="lead">
              {site.name} is a software and digital design agency based in {site.location}. We design and build modern websites, e-commerce stores, and digital graphics for growing businesses across East Africa and worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            kicker="Our Principles"
            title="How We Deliver Excellence"
            lead="We believe a great website or digital identity isn't an expensive luxury—it is the highest-leverage investment a growing business can make."
          />
          <div className="values">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={idx * 80} className="value">
                  <Icon size={28} />
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder / Team */}
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="The Team"
            title="Meet The Builder"
            dim="Engineering with Purpose"
          />
          <Reveal className="founder">
            <div className="founder-mark">
              <LogoMark size={96} blocks="#ffffff" gap="#0d0d0f" />
            </div>
            <div>
              <h3>{site.founder}</h3>
              <div className="role">Founder &amp; Lead Software Engineer</div>
              <p>
                Bongomin Ronald is a software engineering student at Mbarara University of Science and Technology (MUST) and the lead behind {site.name}.
              </p>
              <p>
                Passionate about bridging practical local business problems with modern, high-grade web engineering—from robust React applications and PostgreSQL databases to sharp brand design and digital tools that convert.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <button type="button" className="btn btn-sm btn-solid" onClick={() => open()}>
                  Start a Project <ArrowRight size={14} />
                </button>
                <div className="socials">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon size={16} />
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon size={16} />
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
