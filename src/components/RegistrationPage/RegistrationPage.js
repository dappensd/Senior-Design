import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';


const RegistrationPage = () => {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });

  const [loading, setLoading] = useState(false); // State to control the loading animation
  const [actionType, setActionType] = useState(''); // State to determine what action is taking place
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Trigger loading state
    setActionType('registering'); // Set action type to registering
    
    try {
      
      const payload = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };
      
      console.log('Submitting registration with credentials:', payload);

      const response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
       // Log the error response body
        const errorResponse = await response.json();
        console.error('Registration error response:', errorResponse);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('User registered:', data);
      
      setLoading(false);
      setRegistrationSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
  
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration errors, e.g., display error message to the user
    } finally {
      setLoading(false); // Stop loading state after operation is completed or failed
    }
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
          <Typography component="h1" variant="h5" sx={{ color: 'text.primary' }}>
            Sign Up
          </Typography>

        {/* Conditionally render the success message or the form based on the registrationSuccess state */}
        {registrationSuccess ? (
          // Display the success message if registration is successful
          <Box sx={{ textAlign: 'center', color: green[500] }}>
            <CheckCircleIcon sx={{ fontSize: 60 }} />
            <Typography variant="h5">
              Successfully Registered Account
            </Typography>
          </Box>
        ) : (
          // Display the form or loading indicator based on the loading state
        loading ? (
          // Show loading indicator while registering the account
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <CircularProgress />
             <Typography variant="h6" sx={{ mt: 2 }}>
               Registering an Account...
            </Typography>
          </Box>
          ) : (
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={credentials.email}
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
                autoComplete="new-password"
                value={credentials.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Typography component="p" variant="body2" sx={{ color: 'text.primary', mt: 1, textAlign: 'center' }}>
                {"Already have an account? "}
                <Link href="/login" variant="body2" sx={{ textDecoration: 'none', color: 'secondary.main' }}>
                  Login Here
                </Link>
              </Typography>
            </Box>
          )
          )}
        </Box>
      </Container>
    </motion.div>
  );
};  

export default RegistrationPage;

