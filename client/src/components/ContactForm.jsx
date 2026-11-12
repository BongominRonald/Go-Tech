import { useState } from 'react'
import { Send } from 'lucide-react'
import { pricing } from '../data/site.js'

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
  const [status, setStatus] = useState('idle') // idle | sending | ok | bad
  const [msg, setMsg] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Request failed')
      setStatus('ok')
      setMsg("Thank you. We'll reply within 24 hours.")
      setForm({ ...empty, service: defaultService })
      onSent?.()
    } catch {
      setStatus('bad')
      setMsg('Something went wrong. Please try again, or reach us on WhatsApp.')
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
    <form className="form" onSubmit={submit} noValidate>
      {field('name', 'Name', { placeholder: 'Your name' }, true)}
      {field('email', 'Email', { type: 'email', placeholder: 'your.email@example.com' }, true)}
      {field('phone', 'Phone / WhatsApp', { type: 'tel', placeholder: '+256 7xx xxx xxx' })}
      <div className="field">
        <label htmlFor={`${idPrefix}-service`}>Service</label>
        <select id={`${idPrefix}-service`} value={form.service} onChange={set('service')}>
          <option value="">Not sure yet</option>
          {pricing.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
      </div>
      {field('message', 'Message', { as: 'textarea', placeholder: 'Tell us about your project...' }, true)}
      <button type="submit" className="btn btn-solid btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : <>Send Message <Send /></>}
      </button>
      {(status === 'ok' || status === 'bad') && (
        <div className={`form-msg ${status}`} role="status">{msg}</div>
      )}
    </form>
  )
}
