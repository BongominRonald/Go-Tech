import { useState, useEffect } from 'react'
import { MessageCircle, X, Phone, Mail, ArrowUp, Sparkles } from 'lucide-react'
import { site, tel, whatsappLink } from '../data/site.js'
import { WhatsAppIcon } from './icons.jsx'
import { useContactModal } from './ContactModal.jsx'

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showTeaser, setShowTeaser] = useState(true)
  const { open: openModal } = useContactModal()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-hide teaser text after 7 seconds so it doesn't distract
  useEffect(() => {
    const timer = setTimeout(() => setShowTeaser(false), 7000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setOpen(false)
  }

  const handleAction = (callback) => {
    setOpen(false)
    callback?.()
  }

  return (
    <aside className="fab-container" aria-label="Quick Actions">
      {/* Floating Action Menu (Speed Dial) */}
      <div className={`fab-menu ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
        {showScrollTop && (
          <button
            type="button"
            className="fab-action-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            role="menuitem"
          >
            <span className="fab-action-label">Back to Top</span>
            <div className="fab-action-icon scroll-top-icon">
              <ArrowUp size={18} />
            </div>
          </button>
        )}

        <a
          href={tel(site.phones[0])}
          className="fab-action-btn"
          onClick={() => setOpen(false)}
          aria-label={`Call Ronald directly on ${site.phones[0]}`}
          role="menuitem"
        >
          <span className="fab-action-label">Call Directly</span>
          <div className="fab-action-icon phone-icon">
            <Phone size={17} />
          </div>
        </a>

        <button
          type="button"
          className="fab-action-btn"
          onClick={() => handleAction(() => openModal())}
          aria-label="Send direct project inquiry"
          role="menuitem"
        >
          <span className="fab-action-label">Send Inquiry</span>
          <div className="fab-action-icon mail-icon">
            <Mail size={17} />
          </div>
        </button>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-action-btn"
          onClick={() => setOpen(false)}
          aria-label="Chat directly on WhatsApp"
          role="menuitem"
        >
          <span className="fab-action-label">WhatsApp Live</span>
          <div className="fab-action-icon whatsapp-icon">
            <WhatsAppIcon size={20} />
          </div>
        </a>
      </div>

      {/* Main Trigger Floating Action Button */}
      <div className="fab-main-wrapper">
        {showTeaser && !open && (
          <div className="fab-teaser" onClick={() => setOpen(true)} role="status">
            <span>Quick Connect</span>
            <button
              type="button"
              className="fab-teaser-close"
              onClick={(e) => {
                e.stopPropagation()
                setShowTeaser(false)
              }}
              aria-label="Close message"
            >
              ×
            </button>
          </div>
        )}

        <button
          type="button"
          className={`fab-main-btn ${open ? 'active' : ''}`}
          onClick={() => {
            setOpen(!open)
            if (showTeaser) setShowTeaser(false)
          }}
          aria-expanded={open}
          aria-label={open ? 'Close quick actions menu' : 'Open quick actions menu'}
          title={open ? 'Close' : 'Quick Actions & Contact'}
        >
          <span className="fab-pulse-ring" />
          <span className="fab-online-dot" />
          <div className="fab-icon-rotator">
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </div>
        </button>
      </div>

      {/* Backdrop overlay on mobile when FAB menu is expanded */}
      {open && (
        <div
          className="fab-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </aside>
  )
}
