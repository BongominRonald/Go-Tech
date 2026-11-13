import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

// Vector recreation of the Go-Tech mark so it stays crisp on dark or light backgrounds.
export function LogoMark({ size = 32, blocks = 'var(--logo-block)', accent = 'var(--blue)', gap = 'var(--bg)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 232 232" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M0 22 a22 22 0 0 1 22-22 h69 a22 22 0 0 1 22 22 v91 h-113z" fill={blocks} />
      <path d="M0 116 h113 v116 h-91 a22 22 0 0 1-22-22z" fill={blocks} />
      <path d="M116 116 h94 a22 22 0 0 1 22 22 v72 a22 22 0 0 1-22 22 h-94z" fill={blocks} />
      <line x1="114.5" y1="114" x2="114.5" y2="232" stroke={gap} strokeWidth="3" />
      <line x1="0" y1="114.5" x2="113" y2="114.5" stroke={gap} strokeWidth="3" />
      <rect x="138" y="14" width="66" height="66" rx="16" transform="rotate(43 171 47)" fill={accent} />
    </svg>
  )
}

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label={`${site.name} home`}>
      <LogoMark size={28} />
      <span className="logo-text">
        {site.wordmark}<span className="text-blue">.</span>
      </span>
    </Link>
  )
}
