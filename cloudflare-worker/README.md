# Decap CMS OAuth Gateway - Cloudflare Worker

Questo Worker gestisce l'autenticazione OAuth tra Decap CMS e GitHub.

## Setup

### Opzione A: Via Wrangler CLI

```bash
# Installa Wrangler
npm install -g wrangler

# Login a Cloudflare
wrangler login

# Deploy
cd cloudflare-worker
wrangler deploy

# Configura i secrets
wrangler secret put OAUTH_CLIENT_ID
# Incolla il Client ID quando richiesto

wrangler secret put OAUTH_CLIENT_SECRET
# Incolla il Client Secret quando richiesto
```