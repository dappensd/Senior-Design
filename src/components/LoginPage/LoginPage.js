import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import { TextField, Button, Container, Typography, Box, Link, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import { generateCodeVerifier, generateCodeChallenge } from './pkce';
import { motion } from 'framer-motion'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  // Declare timeoutId outside of the handleSubmit function but inside the component
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    // Cleanup function now uses timeoutIdRef
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []); // The dependency array remains empty

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await auth.login(credentials);
      // Assuming response.ok is your success condition:
      if (response.ok) {
        console.log('Login successful, setting timeout');
        setLoading(false);
        setLoginSuccess(true);
        
        timeoutIdRef.current = setTimeout(() => {
          console.log('Timeout completed, navigating');
          navigate('/loggedInHomePage');
        }, 2000); // Adjust the time as needed
      } else {
        setLoading(false);
        throw new Error('Login failed');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        console.log('Component unmounting, clearing timeout');
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
 {loginSuccess ? (
          <Box sx={{ textAlign: 'center', color: green[500] }}>
            <CheckCircleIcon sx={{ fontSize: 60 }} />
            <Typography variant="h5">
              Signed In
            </Typography>
          </Box>
        ) : loading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Signing In...
            </Typography>
          </Box>
          ) : (
            <React.Fragment>
              {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
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
            </React.Fragment>
          )}
        </Box>
      </Container>
    </motion.div>
  );
}

export default LoginPage;




    
