require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Health check (100% Database-Free & Real-Time)
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    brand: 'Go-Tech',
    tagline: 'For Real Solutions',
    mode: 'real-time',
    database: 'none (real-time direct dispatch)',
    timestamp: new Date().toISOString(),
  })
})

// Optional webhook endpoint for real-time contact notifications
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !name.trim() || !message || !message.trim()) {
    return res.status(400).json({ error: 'Name and message are required.' })
  }

  console.log(`[Go-Tech Real-Time] Contact received from "${name.trim()}" (${email || 'no email'}) - Service: ${service || 'General'}`)
  console.log(`[Go-Tech Real-Time] Details: ${message.trim()}`)

  res.json({
    ok: true,
    message: 'Real-time contact received successfully.',
    dispatch: 'direct',
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`[Go-Tech Server] Real-Time Service running on http://localhost:${port}`))
