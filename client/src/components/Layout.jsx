import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { site, whatsappLink } from '../data/site.js'
import { WhatsAppIcon } from './icons.jsx'

const words = [site.wordmark, 'DESIGN', 'BUILD', 'SHIP']

export function SideRails() {
  const col = (k) => (
    <div key={k}>
      {Array.from({ length: 4 }).flatMap((_, i) => words.map((w, j) => (
        <span key={`${k}-${i}-${j}`} className={j === 0 ? 'hi' : ''}>{w}</span>
      )))}
    </div>
  )
  return (
    <div className="rails" aria-hidden="true">
      <div className="rail left"><div className="rail-track">{col('a')}{col('b')}</div></div>
      <div className="rail right"><div className="rail-track">{col('c')}{col('d')}</div></div>
    </div>
  )
}

export function PageLoader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const finish = () => setTimeout(() => setDone(true), 450)
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    const safety = setTimeout(() => setDone(true), 2500)
    return () => clearTimeout(safety)
  }, [])
  return (
    <div className={`loader ${done ? 'done' : ''}`} role="status" aria-live="polite" aria-label="Loading page">
      <span className="loader-word">{site.wordmark}</span>
      <div className="loader-bar"><span /></div>
      <span className="loader-sub">{site.slogan}</span>
    </div>
  )
}

// Scrolls to top on page change, or to #hash targets (works across routes).
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      let tries = 0
      const go = () => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else if (tries++ < 10) setTimeout(go, 80)
      }
      go()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

const titles = {
  '/': `${site.name} — ${site.tagline} | Software & Design in Uganda`,
  '/samples': `Samples — ${site.name}`,
  '/about': `About Us — ${site.name}`,
  '/privacy': `Privacy Policy — ${site.name}`,
  '/terms': `Terms of Service — ${site.name}`,
}
export function TitleManager() {
  const { pathname } = useLocation()
  useEffect(() => { document.title = titles[pathname] || `Page not found — ${site.name}` }, [pathname])
  return null
}

export function WhatsAppFab() {
  return (
    <a className="fab" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon size={26} />
    </a>
  )
}
