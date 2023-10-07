
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav style={{
      padding: '10px',
      background: '#333',
      color: '#fff',
      height: '50px', /* Reduced height */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute', /* Updated to absolute */
      top: '0', /* Position at the top */
      width: '100%', /* Ensure it stretches across the entire width */
      fontSize: '1em' /* Adjust font size */
    }}>
      <h1 style={{fontSize: '1.5em', fontWeight: 'bold', marginLeft: '20px'}}>Stay Aware</h1> {/* Adjusted font size */}
      <div style={{display: 'flex', gap: '35px', justifyContent: 'center', flex: '1'}}>
        <Link to="/" style={{color: '#fff'}}>Home</Link>
        <Link to="/compatibility" style={{color: '#fff'}}>Compatibility</Link>
        <Link to="/devices" style={{color: '#fff'}}>Devices</Link>
        <Link to="/settings" style={{color: '#fff'}}>Settings</Link>
      </div>
      <div style={{width: '140px'}}></div> 
      <Link to="/login" style={{color: '#fff', marginRight: '20px'}}>Log In</Link>
    </nav>
  );
}

export default NavigationBar;
