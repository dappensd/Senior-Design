import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css'; 

function RegistrationPage() {
  return (
    <div className="registration-container"> 
      <form className="registration-form"> 
        <h2>Register</h2> 
        
        <label>Create a Username:</label>
        <input type="text" name="username" className="registration-input" /> 
        
        <label>Create a Password:</label>
        <input type="password" name="password" className="registration-input" /> 
        
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" className="registration-input" /> 
        
        <button type="submit" className="registration-button">Register Now!</button> 
      </form>
      <p>Already have an account? 
        <Link to="/login" className="registration-link">Login Here!</Link>
      </p>
    </div>
  );
}

export default RegistrationPage;


