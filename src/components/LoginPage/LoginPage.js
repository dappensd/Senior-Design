import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { generateCodeVerifier, generateCodeChallenge } from './pkce';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await auth.login(credentials);
      const data = await response.json();
      if (response.ok) {
        auth.setUser(data.user);
        navigate('/');
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to handle the redirection after Azure AD B2C sign-in process
  const handleRedirect = async () => {
    const code = new URLSearchParams(window.location.search).get('code');
    const codeVerifier = sessionStorage.getItem('codeVerifier');

    if (code && codeVerifier) {
      try {
        // Include credentials to ensure cookies are sent
        const response = await fetch('http://localhost:3001/auth/azure/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include credentials for cookies
          body: JSON.stringify({ code, codeVerifier }),
        });

        if (!response.ok) {
          // Handle error responses
          throw new Error('Authentication failed');
        }

        // Handle successful authentication
        console.log('Authentication successful');
        // Redirect or update state as needed
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Run the handleRedirect function after the user is redirected back to your application
  useEffect(() => {
    handleRedirect();
  }, []);

  const handleMicrosoftSignIn = async () => {
    // Generate codeVerifier and codeChallenge for PKCE
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Store the codeVerifier in sessionStorage or localStorage
    sessionStorage.setItem('codeVerifier', codeVerifier);

    // Construct the Azure AD B2C URL
    const tenantName = process.env.REACT_APP_AZUREAD_TENANT_NAME; 
    const policyName = process.env.REACT_APP_AZUREAD_POLICY_NAME;
    const clientId = process.env.REACT_APP_AZUREAD_CLIENT_ID; 
    const redirectUri = encodeURIComponent(process.env.REACT_APP_AZUREAD_CALLBACK_URL); 
    const azureSignInUrl = `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/oauth2/v2.0/authorize?p=${policyName}&client_id=${clientId}&nonce=defaultNonce&redirect_uri=${redirectUri}&scope=openid&response_type=code&prompt=login&code_challenge=${codeChallenge}&code_challenge_method=S256`;

    // Redirect the user to the Azure AD B2C URL
    window.location.href = azureSignInUrl;
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 3,
          mt: 8,
          mb: 4,
        }}
      >
      <Typography 
        component="h1" 
        variant="h5" 
        sx={{ color: 'text.primary' }}
      >
          Sign in
      </Typography>
        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} {/* Error message displayed here */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={credentials.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: '#2F2F2F' }}
            onClick={handleMicrosoftSignIn}
            >
            Sign in with Microsoft
            </Button>
          
            <Typography component="p" variant="body2" sx={{ color: 'text.primary', mt: 1, display: 'block', textAlign: 'center' }}>
            {"Don't have an account? "}
            <Link href="/register" variant="body2" sx={{ textDecoration: 'none', color: 'blue !important' }}>
              Sign Up
            </Link>
          </Typography>  
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;




    
