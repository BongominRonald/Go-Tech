import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { X } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { site, tel, whatsappLink } from '../data/site.js'

const Ctx = createContext({ open: () => {} })
export const useContactModal = () => useContext(Ctx)

export function ContactModalProvider({ children }) {
  const [state, setState] = useState({ open: false, service: '' })
  const open = useCallback((service = '') => setState({ open: true, service }), [])
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])

  useEffect(() => {
    if (!state.open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [state.open, close])

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {state.open && (
        <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-x" onClick={close} aria-label="Close contact form"><X size={18} /></button>
            <h3 id="modal-title">Let's build yours<span className="text-blue">.</span></h3>
            <p className="note">Instant real-time response. Connect directly via WhatsApp or direct email.</p>
            <ContactForm idPrefix="m" defaultService={state.service} />
            <div className="modal-foot">
              Prefer to talk? Call <a href={tel(site.phones[0])}>{site.phones[0]}</a> or{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp us</a> — and thank you for considering {site.name}.
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  )
}
