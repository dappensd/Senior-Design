import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css'; // Make sure this path is correct

function RegistrationPage() {
  return (
    <div className="registration-container"> {/* Adjusted class name */}
      <form className="registration-form"> {/* Adjusted class name */}
        <h2>Register</h2> {/* Moved inside the form for consistency */}
        
        <label>Create a Username:</label>
        <input type="text" name="username" className="registration-input" /> {/* Adjusted class name */}
        
        <label>Create a Password:</label>
        <input type="password" name="password" className="registration-input" /> {/* Adjusted class name */}
        
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" className="registration-input" /> {/* Adjusted class name */}
        
        <button type="submit" className="registration-button">Register Now!</button> {/* Adjusted class name */}
      </form>
      <p>Already have an account? 
        <Link to="/login" className="registration-link">Login Here!</Link> {/* Removed inline styles and adjusted class name */}
      </p>
    </div>
  );
}

export default RegistrationPage;


