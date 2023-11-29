// useAuth.js
import { useContext } from 'react';
import { AuthContext } from './auth-context'; // Adjust the path as needed

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};



