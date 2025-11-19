# Decap CMS OAuth Gateway - Cloudflare Worker

Questo Worker gestisce l'autenticazione OAuth tra Decap CMS e GitHub.

## Setup

### 1. Crea GitHub OAuth App

1. Vai su https://github.com/settings/developers
2. Clicca "New OAuth App"
3. Compila:
   - **Application name**: `Blog CMS OAuth`
   - **Homepage URL**: `https://petretiandrea.github.io`
   - **Authorization callback URL**: `https://decap-cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback`
4. Salva **Client ID** e **Client Secret**

### 2. Deploy su Cloudflare

#### Opzione A: Via Dashboard (Consigliata)

1. Vai su https://dash.cloudflare.com
2. Clicca "Workers & Pages" nella sidebar
3. Clicca "Create application" → "Create Worker"
4. Dai un nome: `decap-cms-oauth`
5. Clicca "Deploy"
6. Clicca "Quick Edit"
7. Copia e incolla il contenuto di `oauth-gateway.js`
8. Clicca "Save and Deploy"

#### Configura le variabili d'ambiente:

1. Nel worker, vai su "Settings" → "Variables"
2. Aggiungi due **Secret** (NON variables):
   - `OAUTH_CLIENT_ID`: il tuo GitHub Client ID
   - `OAUTH_CLIENT_SECRET`: il tuo GitHub Client Secret
3. Clicca "Save"

#### Opzione B: Via Wrangler CLI

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

### 3. Ottieni l'URL del Worker

Dopo il deploy, l'URL sarà simile a:
```
https://decap-cms-oauth.YOUR-SUBDOMAIN.workers.dev
```

### 4. Aggiorna GitHub OAuth App

Torna su https://github.com/settings/developers e aggiorna:
- **Authorization callback URL**: `https://decap-cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback`

### 5. Aggiorna Decap CMS config

In `public/admin/config.yml`, rimuovi `open_authoring` e aggiungi:

```yaml
backend:
  name: github
  repo: petretiandrea/petretiandrea.github.io
  branch: master
  base_url: https://decap-cms-oauth.YOUR-SUBDOMAIN.workers.dev
```

## Test

1. Vai su `https://petretiandrea.github.io/admin`
2. Clicca "Login with GitHub"
3. Dovresti essere reindirizzato a GitHub per autorizzare
4. Dopo l'autorizzazione, dovresti tornare al CMS loggato

## Costi

✅ **Gratis** con Cloudflare Workers Free plan:
- 100.000 richieste/giorno
- Più che sufficiente per un blog personale

## Troubleshooting

- **401 Unauthorized**: Controlla che Client ID e Secret siano corretti
- **Redirect mismatch**: Verifica che l'URL callback in GitHub OAuth App corrisponda esattamente
- **CORS errors**: Il worker gestisce automaticamente CORS, ma verifica che il browser non blocchi popup
