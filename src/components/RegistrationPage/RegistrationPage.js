import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Link } from '@mui/material';

const RegistrationPage = () => {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., call an authentication API.
    console.log(credentials);
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
        <Typography component="h1" variant="h5" sx={{ color: 'text.primary' }}>
          Sign Up
        </Typography>
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
          <Box 
          component="div" 
          sx={{ 
            width: '100%',  // Take up the full width of the form
            display: 'flex', 
            justifyContent: 'center',  // Center the content horizontally
            mt: 1  // Optional: adds some spacing above the text
          }}
        >
          <Typography component="p" variant="body2" sx={{ color: 'text.primary', mt: 1 }}>
          Already have an account?&nbsp;
          <Link href="/login" variant="body2">
            Sign In
          </Link>
          </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationPage;



