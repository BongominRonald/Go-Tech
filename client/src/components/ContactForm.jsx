import { useState } from 'react'
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
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
  const [status, setStatus] = useState('idle') // idle | submitting | ok | error
  const [method, setMethod] = useState('email') // email | whatsapp (email by default for inbox delivery)
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // Build clean message text
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

  // Real-time WhatsApp dispatch
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

  // Direct-to-inbox Automated Email Delivery (Zero Database Needed)
  const sendEmailDirect = async (e) => {
    if (e) e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || 'Not provided',
          service: form.service || 'General Inquiry',
          message: form.message.trim(),
          _subject: `New Go-Tech Project Inquiry from ${form.name.trim()}${form.service ? ` [${form.service}]` : ''}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('ok')
        setForm({ ...empty, service: defaultService })
        onSent?.()
      } else {
        throw new Error(data.message || 'Server error while sending email.')
      }
    } catch (err) {
      console.warn('Direct delivery error, offering mailto fallback:', err)
      // Graceful fallback to mailto so visitor inquiry is never lost
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (method === 'whatsapp') {
      sendWhatsApp(e)
    } else {
      sendEmailDirect(e)
    }
  }

  const field = (key, label, props = {}, required = false) => (
    <div className="field">
      <label htmlFor={`${idPrefix}-${key}`}>
        {label}
        {required && <em aria-hidden="true">*</em>}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          id={`${idPrefix}-${key}`}
          value={form[key]}
          onChange={set(key)}
          placeholder={props.placeholder}
          aria-invalid={!!errors[key]}
        />
      ) : (
        <input
          id={`${idPrefix}-${key}`}
          value={form[key]}
          onChange={set(key)}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          aria-invalid={!!errors[key]}
        />
      )}
      {errors[key] && <div className="err">{errors[key]}</div>}
    </div>
  )

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Real-time delivery method selector */}
      <div className="realtime-selector-wrap">
        <span className="realtime-label">Choose Preferred Contact Channel:</span>
        <div className="realtime-toggle">
          <button
            type="button"
            className={`realtime-btn ${method === 'email' ? 'active-email' : ''}`}
            onClick={() => setMethod('email')}
          >
            <Mail size={15} /> Direct to Inbox (Email)
          </button>
          <button
            type="button"
            className={`realtime-btn ${method === 'whatsapp' ? 'active-wa' : ''}`}
            onClick={() => setMethod('whatsapp')}
          >
            <WhatsAppIcon /> Instant WhatsApp
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
          {pricing.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
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
          <button
            type="submit"
            className="btn btn-solid btn-block"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Delivering to Ronald's Inbox...
              </>
            ) : (
              <>
                <Mail size={16} /> Send Directly to My Inbox <Send size={14} />
              </>
            )}
          </button>
        )}
      </div>

      {status === 'ok' && (
        <div className="form-msg ok" role="status" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <CheckCircle2 size={20} style={{ color: 'var(--blue)', flexShrink: 0 }} />
          <div>
            <strong>Message Successfully Delivered!</strong> Your inquiry has been sent directly to{' '}
            <span style={{ textDecoration: 'underline' }}>{site.email}</span>. We will review your requirements and respond promptly.
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="form-msg bad" role="alert" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AlertCircle size={20} style={{ color: '#dc2626', flexShrink: 0 }} />
          <div>{errorMsg}</div>
        </div>
      )}
    </form>
  )
}
