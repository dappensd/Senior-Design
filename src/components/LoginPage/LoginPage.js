import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Link } from '@mui/material';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

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
          // This will add a contrasting background, padding, and a border radius
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 3,  // padding
          mt: 8,  // margin-top
          mb: 4,  // margin-bottom
        }}
      >
        <Typography 
        component="h1" 
        variant="h5"
        sx={{ color: 'text.primary' }}  // This represents black or a very dark color in a standard theme
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}> {/* Full width form */}
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
          {/* Adding a link to navigate to the registration page */}
          <Link href="/register" variant="body2">
            {"Create an Account"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;



    
