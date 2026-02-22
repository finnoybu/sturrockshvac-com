# Cloudflare Worker – Sturrocks HVAC Form Handler

This Worker processes form submissions from the static GitHub Pages site and sends transactional email via Resend.

It provides:

- Server-side validation
- Honeypot spam protection
- CORS handling
- Secure API key usage
- JSON-based POST handling
- Email delivery

---

## Architecture

Frontend (GitHub Pages)
→ POST JSON
→ Cloudflare Worker
→ Resend API
→ Email delivered

No server hosting required.
No recurring form service fees.

---

## Worker Location

Source of truth:

/infrastructure/cloudflare/worker.js

Cloudflare UI deployment must match this file.

---

## Required Environment Variables

Set in Cloudflare Worker (Production environment):

RESEND_API_KEY

This must be created in Resend and stored as a secret in:

Cloudflare Dashboard → Workers → Settings → Variables → Production

Never commit API keys to the repository.

---

## Resend Configuration

1. Create Resend account
2. Generate API key
3. Add domain (sturrockshvac.com)
4. Add DNS records (SPF + DKIM)
5. Verify domain
6. Update Worker `from:` to:

Sturrocks HVAC <no-reply@sturrockshvac.com>

Until domain is verified, testing may require:

from: "onboarding@resend.dev"

---

## DNS Requirements (Production)

Add records provided by Resend:

- SPF
- DKIM
- (Optional) DMARC

These improve deliverability and prevent spoofing.

---

## Deployment Process (Manual via UI)

1. Go to Cloudflare → Workers & Pages
2. Open Worker
3. Paste updated worker.js code
4. Click Deploy
5. Verify logs under Observability

---

## Validation Logic

The Worker validates:

- Name (2–100 characters)
- Phone (regex validated)
- Email (if provided)
- Service selected
- Details (10–1000 characters)

Honeypot field must remain empty.

---

## CORS Configuration

Allows POST + OPTIONS.

Access-Control-Allow-Origin: *

If restricting later, replace with production domain.

---

## Security Notes

- API keys stored as Cloudflare secrets
- No sensitive data logged
- Honeypot for basic bot filtering
- Validation enforced server-side
- Frontend validation supplements UX only

---

## Known Limitations

- No rate limiting (can be added later)
- No CAPTCHA
- No file upload support
- No logging persistence (Cloudflare logs only)

---

## Future Enhancements

- Rate limiting by IP
- reCAPTCHA integration
- Email HTML template
- Admin notification routing
- Analytics event tracking
- Wrangler CLI deployment automation

---

## Versioning

Changes to Worker must be:

1. Committed in repository
2. Deployed in Cloudflare
3. Verified in production logs

This file represents the authoritative version.