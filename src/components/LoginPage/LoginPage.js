
import React, { useState } from 'react';
import '../../App.css';  // Importing the styles from App.css
import { Link } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label htmlFor="username" className="login-label">Username</label>
      <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="login-input" />
      <label htmlFor="password" className="login-label">Password</label>
      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="login-input" />
      <input type="submit" value="Submit" className="login-submit" />
      <p>Don't have an account? <Link to="/register">Register Here!</Link></p>
    </div>
  );
}

export default LoginPage;

    
