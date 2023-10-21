
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title"><Link to = "/" className="nav-link">Stay Aware</Link></h1>
      <div className="navbar-links">
        <Link to="/compatibility" className="nav-link">Compatibility</Link>
        <Link to="/devices" className="nav-link">Devices</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>
      <div className="navbar-spacer"></div> 
      <Link to="/login" className="nav-link-right">Log In</Link>
    </nav>
  );
}

export default NavigationBar;

