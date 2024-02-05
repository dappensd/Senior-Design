import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Add state to store user data
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`The current logged in state is: ${isLoggedIn}`);
  }, [isLoggedIn, user]); // Add user to the dependency array

  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setUser(data.user); // Store the user data in state
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:3001/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      setUser(null); // Clear the user data
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



