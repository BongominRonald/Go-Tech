import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { useContactModal } from './ContactModal.jsx'

const links = [
  { to: '/#projects', label: 'Projects' },
  { to: '/#services', label: 'Services' },
  { to: '/about', label: 'About', page: true },
  { to: '/#process', label: 'Process' },
  { to: '/#pricing', label: 'Pricing' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { open: openContact } = useContactModal()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Logo onClick={close} />

          <nav className="nav" aria-label="Main">
            {links.map((l) =>
              l.page ? (
                <NavLink key={l.to} to={l.to}>
                  {l.label}
                </NavLink>
              ) : (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => openContact()}
              aria-haspopup="dialog"
            >
              Contact
            </button>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile" aria-hidden={!open}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={close} tabIndex={open ? 0 : -1}>
            {l.label}
          </Link>
        ))}
        <button
          type="button"
          className="btn btn-solid"
          onClick={() => { close(); openContact() }}
          tabIndex={open ? 0 : -1}
          style={{ marginTop: 24 }}
        >
          Contact Us
        </button>
      </nav>
    </>
  )
}
