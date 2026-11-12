require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// Database connection
const pool = new Pool({
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'charmsolutions',
})

let dbReady = false

// Initialize table on startup
async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(100),
        service VARCHAR(150),
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS phone VARCHAR(100);
      ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS service VARCHAR(150);
    `)
    dbReady = true
    console.log('[Go-Tech Server] PostgreSQL connected and table verified.')
  } catch (err) {
    console.warn('[Go-Tech Server] PostgreSQL init warning:', err.message)
    console.warn('[Go-Tech Server] Incoming messages will also be logged to fallback file.')
  }
}

initDb()

// Health check
app.get('/api/health', async (_req, res) => {
  res.json({
    status: 'online',
    brand: 'Go-Tech',
    database: dbReady ? 'connected' : 'connecting/fallback',
    timestamp: new Date().toISOString(),
  })
})

// Contact message submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !name.trim() || !message || !message.trim()) {
    return res.status(400).json({ error: 'Name and message are required.' })
  }

  const record = {
    name: name.trim(),
    email: email ? email.trim() : null,
    phone: phone ? phone.trim() : null,
    service: service ? service.trim() : null,
    message: message.trim(),
    created_at: new Date().toISOString(),
  }

  let dbSaved = false

  try {
    if (dbReady) {
      await pool.query(
        'INSERT INTO contact_messages (name, email, phone, service, message) VALUES ($1, $2, $3, $4, $5)',
        [record.name, record.email, record.phone, record.service, record.message]
      )
      dbSaved = true
    }
  } catch (dbErr) {
    console.error('[Go-Tech Server] DB insert failed:', dbErr.message)
  }

  // Backup log to local JSONL file so no messages are ever lost
  try {
    const logPath = path.join(__dirname, 'messages.jsonl')
    fs.appendFileSync(logPath, JSON.stringify({ ...record, dbSaved }) + '\n')
  } catch (fsErr) {
    console.error('[Go-Tech Server] Local backup write error:', fsErr.message)
  }

  console.log(`[Go-Tech Server] New message from "${record.name}" (${record.email || 'no email'}) - Service: ${record.service || 'N/A'}`)

  res.json({ ok: true, message: 'Message received successfully.' })
})

// List recent messages (for development verification)
app.get('/api/messages', async (_req, res) => {
  try {
    if (dbReady) {
      const result = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50')
      return res.json({ messages: result.rows })
    }
  } catch (e) {
    // fallback to file
  }

  try {
    const logPath = path.join(__dirname, 'messages.jsonl')
    if (fs.existsSync(logPath)) {
      const lines = fs.readFileSync(logPath, 'utf8').trim().split('\n').filter(Boolean)
      const list = lines.map((l) => JSON.parse(l)).reverse().slice(0, 50)
      return res.json({ messages: list, source: 'fallback_file' })
    }
  } catch (e) {
    // ignore
  }

  res.json({ messages: [] })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`[Go-Tech Server] Running on http://localhost:${port}`))
