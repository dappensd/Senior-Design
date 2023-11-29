import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

   // Use useEffect to log state changes
   useEffect(() => {
    console.log('isLoggedIn state changed to:', isLoggedIn);
  }, [isLoggedIn]);

  // Function to log in the user
  const login = async (credentials) => {
    try {
      console.log('Attempting login with credentials:', credentials);
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Make sure credentials are included
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        console.log('Login response not OK:', response);
        throw new Error('Login failed');
      }

      console.log('Before login, isLoggedIn:', isLoggedIn);

      setIsLoggedIn(true);

      console.log('After login, isLoggedIn:', isLoggedIn);

      navigate('/'); // Navigate to home page after login
    } catch (error) {
      console.error('Error during login:', error);
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

       console.log('Before logout, isLoggedIn:', isLoggedIn);

       setIsLoggedIn(false);

       console.log('After logout, isLoggedIn:', isLoggedIn);

       navigate('/login'); // Navigate to the login page

    } catch (error) {
      console.error(error);
    }
  };

  console.log("AuthProvider values", { isLoggedIn, login, logout });

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

