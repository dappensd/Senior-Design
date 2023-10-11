import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <label>Username:</label>
        <input type="text" name="username" className="register-input" />
        <label>Password:</label>
        <input type="password" name="password" className="register-input" />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" className="register-input" />
        <button type="submit" className="register-button">Register Now!</button>
      </form>
      <p>Already have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Login Here!</Link></p>
    </div>
  );
}

export default RegistrationPage;

