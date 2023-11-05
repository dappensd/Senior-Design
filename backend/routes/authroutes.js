const express = require('express');
const axios = require('axios');
const qs = require('qs');

const router = express.Router();
const tenantName = process.env.AZUREAD_TENANT_NAME;
// Assuming you have a utility function to exchange the authorization code for a token
async function exchangeCodeForToken(code, codeVerifier, redirectUri) {
  const tokenEndpoint = `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/oauth2/v2.0/token`;

  const tokenResponse = await axios.post(tokenEndpoint, qs.stringify({
    client_id: process.env.AZUREAD_CLIENT_ID,
    scope: 'openid offline_access',  // Add other scopes as needed
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
    client_secret: process.env.AZUREAD_CLIENT_SECRET,  // Only if you are using a confidential client
    code_verifier: codeVerifier
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return tokenResponse.data;
}

router.post('/auth/azure/callback', async (req, res) => {
  const { code, codeVerifier } = req.body;  // You should send the codeVerifier from the client securely
  const redirectUri = process.env.AZUREAD_CALLBACK_URL;  // Your redirect URI

  try {
    const tokenData = await exchangeCodeForToken(code, codeVerifier, redirectUri);

    // At this point, you can use tokenData.id_token to get the user profile
    // and tokenData.access_token to call protected APIs.

    // Implement your logic to create a session or a JWT for the authenticated user

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
