/**
 * Cloudflare Worker - GitHub OAuth Gateway for Decap CMS
 *
 * Environment variables required:
 * - OAUTH_CLIENT_ID: GitHub OAuth App Client ID
 * - OAUTH_CLIENT_SECRET: GitHub OAuth App Client Secret
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Route: /auth - Start OAuth flow
  if (path === '/auth') {
    const clientId = OAUTH_CLIENT_ID
    const redirectUri = `${url.origin}/callback`
    const scope = 'repo,user'

    const authUrl = `https://github.com/login/oauth/authorize?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${scope}`

    return Response.redirect(authUrl, 302)
  }

  // Route: /callback - Exchange code for token
  if (path === '/callback') {
    const code = url.searchParams.get('code')

    if (!code) {
      return new Response('No code provided', { status: 400 })
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: OAUTH_CLIENT_ID,
          client_secret: OAUTH_CLIENT_SECRET,
          code: code,
        }),
      })

      const data = await tokenResponse.json()

      if (data.error) {
        throw new Error(data.error_description || data.error)
      }

      // Return HTML page that sends token to parent window (CMS)
      const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authenticating...</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #f5f5f5;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spinner"></div>
    <h2>Authentication Successful!</h2>
    <p>Redirecting to CMS...</p>
  </div>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("Received message:", e);
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);

      // Also send directly (backup method)
      setTimeout(function() {
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}',
          '*'
        );
        setTimeout(function() {
          window.close();
        }, 1000);
      }, 100);

      console.log("Provider: github");
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html',
          ...corsHeaders,
        },
      })
    } catch (error) {
      console.error('OAuth error:', error)
      return new Response(`Authentication failed: ${error.message}`, {
        status: 500,
        headers: corsHeaders,
      })
    }
  }

  // Default route - show info
  return new Response(
    JSON.stringify({
      name: 'Decap CMS OAuth Gateway',
      routes: {
        '/auth': 'Start OAuth flow',
        '/callback': 'OAuth callback',
      },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    }
  )
}
