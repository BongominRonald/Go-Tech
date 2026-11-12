import { useState } from 'react'
import { Send, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'
import { pricing, site } from '../data/site.js'
import { WhatsAppIcon } from './icons.jsx'

const empty = { name: '', email: '', phone: '', service: '', message: '' }

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Please enter your name.'
  if (!f.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Please enter a valid email.'
  if (!f.message.trim()) e.message = 'Please write a message.'
  return e
}

export default function ContactForm({ defaultService = '', idPrefix = 'c', onSent }) {
  const [form, setForm] = useState({ ...empty, service: defaultService })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | ok
  const [method, setMethod] = useState('whatsapp') // whatsapp | email

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // Build clean real-time message text
  const buildMessageText = () => {
    return [
      `*New Inquiry — ${site.name} (${site.tagline})*`,
      ``,
      `👤 *Name:* ${form.name.trim()}`,
      `📧 *Email:* ${form.email.trim()}`,
      `📱 *Phone / WhatsApp:* ${form.phone.trim() || 'Not provided'}`,
      `💼 *Service:* ${form.service || 'General Inquiry'}`,
      ``,
      `💬 *Message:*`,
      form.message.trim(),
    ].join('\n')
  }

  // Real-time WhatsApp dispatch (Zero database needed)
  const sendWhatsApp = (e) => {
    if (e) e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    const text = buildMessageText()
    const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setStatus('ok')
    onSent?.()
  }

  // Real-time Direct Email dispatch (Zero database needed)
  const sendEmail = (e) => {
    if (e) e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    const subject = `Go-Tech Inquiry from ${form.name.trim()}${form.service ? ` [${form.service}]` : ''}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone / WhatsApp: ${form.phone.trim() || 'Not provided'}`,
      `Service: ${form.service || 'General Inquiry'}`,
      ``,
      `Message:`,
      form.message.trim(),
    ].join('\n')

    const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setStatus('ok')
    onSent?.()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (method === 'whatsapp') {
      sendWhatsApp(e)
    } else {
      sendEmail(e)
    }
  }

  const field = (key, label, props = {}, required = false) => (
    <div className="field">
      <label htmlFor={`${idPrefix}-${key}`}>{label}{required && <em aria-hidden="true">*</em>}</label>
      {props.as === 'textarea'
        ? <textarea id={`${idPrefix}-${key}`} value={form[key]} onChange={set(key)} placeholder={props.placeholder} aria-invalid={!!errors[key]} />
        : <input id={`${idPrefix}-${key}`} value={form[key]} onChange={set(key)} type={props.type || 'text'} placeholder={props.placeholder} aria-invalid={!!errors[key]} />}
      {errors[key] && <div className="err">{errors[key]}</div>}
    </div>
  )

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Real-time delivery method selector */}
      <div className="realtime-selector-wrap">
        <span className="realtime-label">Choose Real-Time Contact Channel:</span>
        <div className="realtime-toggle">
          <button
            type="button"
            className={`realtime-btn ${method === 'whatsapp' ? 'active-wa' : ''}`}
            onClick={() => setMethod('whatsapp')}
          >
            <WhatsAppIcon /> Instant WhatsApp
          </button>
          <button
            type="button"
            className={`realtime-btn ${method === 'email' ? 'active-email' : ''}`}
            onClick={() => setMethod('email')}
          >
            <Mail size={15} /> Direct Email
          </button>
        </div>
      </div>

      {field('name', 'Name', { placeholder: 'Your name' }, true)}
      {field('email', 'Email', { type: 'email', placeholder: 'your.email@example.com' }, true)}
      {field('phone', 'Phone / WhatsApp', { type: 'tel', placeholder: '+256 7xx xxx xxx' })}

      <div className="field">
        <label htmlFor={`${idPrefix}-service`}>Service Required</label>
        <select id={`${idPrefix}-service`} value={form.service} onChange={set('service')}>
          <option value="">Select a service (optional)</option>
          {pricing.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
      </div>

      {field('message', 'Project Details', { as: 'textarea', placeholder: 'Tell us what you want to build...' }, true)}

      {/* Action buttons */}
      <div className="form-action-row">
        {method === 'whatsapp' ? (
          <button type="submit" className="btn btn-solid btn-block btn-wa-action">
            <WhatsAppIcon /> Send via WhatsApp (Instant Live Chat)
          </button>
        ) : (
          <button type="submit" className="btn btn-solid btn-block">
            <Mail size={16} /> Send via Direct Email <Send size={14} />
          </button>
        )}
      </div>

      {status === 'ok' && (
        <div className="form-msg ok" role="status" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <CheckCircle2 size={18} style={{ color: 'var(--blue)', flexShrink: 0 }} />
          <div>
            <strong>Message Formatted!</strong> Opening your {method === 'whatsapp' ? 'WhatsApp' : 'Email'} client to deliver directly to {site.founder} in real time.
          </div>
        </div>
      )}
    </form>
  )
}
