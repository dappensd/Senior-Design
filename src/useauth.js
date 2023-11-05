// useAuth.js
import { useContext } from 'react';
import { AuthContext } from './auth-context'; // Make sure the path is correct

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("useAuth context", context);
  return context;
};


