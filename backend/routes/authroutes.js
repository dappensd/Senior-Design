const express = require('express');
const axios = require('axios');
const qs = require('qs');

const router = express.Router();
const tenantName = process.env.AZUREAD_TENANT_NAME;

async function exchangeCodeForToken(code, codeVerifier, redirectUri) {
  const tokenEndpoint = `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/oauth2/v2.0/token`;

  const tokenResponse = await axios.post(tokenEndpoint, qs.stringify({
    client_id: process.env.AZUREAD_CLIENT_ID,
    scope: 'openid offline_access', 
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
    client_secret: process.env.AZUREAD_CLIENT_SECRET, 
    code_verifier: codeVerifier
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return tokenResponse.data;
}

router.post('/auth/azure/callback', async (req, res) => {
  const { code, codeVerifier } = req.body;  
  const redirectUri = process.env.AZUREAD_CALLBACK_URL;  // Redirect URI

  try {
    const tokenData = await exchangeCodeForToken(code, codeVerifier, redirectUri);

    res.json({
      message: 'Authentication successful',
      tokenData
    });
  } catch (error) {
    console.error('Error exchanging code for token', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
