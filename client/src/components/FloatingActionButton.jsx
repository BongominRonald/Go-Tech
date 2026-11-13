import { useState, useEffect } from 'react'
import { MessageCircle, X, Phone, Mail, ArrowUp } from 'lucide-react'
import { site, tel, whatsappLink } from '../data/site.js'
import { WhatsAppIcon } from './icons.jsx'
import { useContactModal } from './ContactModal.jsx'

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { open: openModal } = useContactModal()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (!e.target.closest('.fab-container')) {
        setOpen(false)
      }
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

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
      {/* Speed Dial Action List */}
      <div className={`fab-menu ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
        {showScrollTop && (
          <button
            type="button"
            className="fab-action-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            role="menuitem"
          >
            <span className="fab-action-label">Top</span>
            <div className="fab-action-icon scroll-top-icon">
              <ArrowUp size={16} />
            </div>
          </button>
        )}

        <a
          href={tel(site.phones[0])}
          className="fab-action-btn"
          onClick={() => setOpen(false)}
          aria-label={`Call directly on ${site.phones[0]}`}
          role="menuitem"
        >
          <span className="fab-action-label">Call Us</span>
          <div className="fab-action-icon phone-icon">
            <Phone size={16} />
          </div>
        </a>

        <button
          type="button"
          className="fab-action-btn"
          onClick={() => handleAction(() => openModal())}
          aria-label="Send direct message"
          role="menuitem"
        >
          <span className="fab-action-label">Inquiry Form</span>
          <div className="fab-action-icon mail-icon">
            <Mail size={16} />
          </div>
        </button>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-action-btn"
          onClick={() => setOpen(false)}
          aria-label="Chat on WhatsApp"
          role="menuitem"
        >
          <span className="fab-action-label">WhatsApp Live</span>
          <div className="fab-action-icon whatsapp-icon">
            <WhatsAppIcon size={18} />
          </div>
        </a>
      </div>

      {/* Main Floating Trigger Button */}
      <div className="fab-main-wrapper">
        <button
          type="button"
          className={`fab-main-btn ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={open ? 'Close quick actions' : 'Open quick contact options'}
          title={open ? 'Close' : 'Quick Actions'}
        >
          <span className="fab-pulse-ring" />
          <span className="fab-online-dot" />
          <div className="fab-icon-rotator">
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </div>
        </button>
      </div>
    </aside>
  )
}
