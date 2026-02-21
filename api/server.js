import express from 'express';
import cors from 'cors';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const app = express();
const PORT = process.env.PORT || 4071;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://nocoapi.com';
const SES_FROM_EMAIL = process.env.SES_FROM_EMAIL || 'noreply@nocoapi.com';
const SES_TO_EMAIL = process.env.SES_TO_EMAIL || 'rmccaffr@tcd.ie';
const AWS_REGION = process.env.AWS_REGION || 'eu-west-1';

const ses = new SESClient({ region: AWS_REGION });

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const entries = rateLimitMap.get(ip) || [];
  const valid = entries.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (valid.length >= RATE_LIMIT_MAX) {
    return false;
  }

  valid.push(now);
  rateLimitMap.set(ip, valid);
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entries] of rateLimitMap) {
    const valid = entries.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 10 * 60 * 1000);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Contact form
app.post('/api/contact', async (req, res) => {
  const clientIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.ip;

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, description, budget, timeline } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }
  if (!description || typeof description !== 'string' || description.trim().length === 0) {
    return res.status(400).json({ error: 'Project description is required.' });
  }
  if (name.length > 200 || email.length > 200 || description.length > 5000) {
    return res.status(400).json({ error: 'One or more fields exceed the maximum length.' });
  }

  const emailBody = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    '',
    'Project Description:',
    description.trim(),
  ]
    .filter((line) => line !== null)
    .join('\n');

  try {
    await ses.send(
      new SendEmailCommand({
        Source: SES_FROM_EMAIL,
        Destination: { ToAddresses: [SES_TO_EMAIL] },
        Message: {
          Subject: { Data: `New enquiry from ${name.trim()}`, Charset: 'UTF-8' },
          Body: { Text: { Data: emailBody, Charset: 'UTF-8' } },
        },
        ReplyToAddresses: [email.trim()],
      })
    );

    console.log(`Contact form submission from ${email.trim()}`);
    res.json({ success: true });
  } catch (err) {
    console.error('SES send error:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`nocoapi API listening on port ${PORT}`);
});
