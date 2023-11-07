import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to log in the user
  const login = async (credentials) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Make sure credentials are included
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      setIsLoggedIn(true); // Update the logged in state
      navigate('/'); // Navigate to home page after login
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to be handled in the login form
    }
  };

  // Function to log out the user
  const logout = async () => {
    try {
      await fetch('/auth/logout', {
        method: 'POST',
        credentials: 'include', // Make sure credentials are included
      });
      setIsLoggedIn(false); // Update the logged in state
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

