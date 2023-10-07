
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', marginTop: '100px' }}>
      <h2>Login</h2>
      <form style={{ display: 'grid', gap: '10px', justifyItems: 'center', alignItems: 'center' }}>
        <label style={{ gridArea: '1 / 1 / 2 / 2' }}>Username:</label>
        <input type="text" name="username" style={{ gridArea: '1 / 2 / 2 / 3', width: '200px' }} />
        <label style={{ gridArea: '2 / 1 / 3 / 2' }}>Password:</label>
        <input type="password" name="password" style={{ gridArea: '2 / 2 / 3 / 3', width: '200px' }} />
        <button type="submit" style={{ gridArea: '3 / 1 / 4 / 3', padding: '10px 20px', cursor: 'pointer' }}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>Register Here!</Link></p>
    </div>
  );
}

export default LoginPage;
