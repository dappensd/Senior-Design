import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/device/1">Device 1 Details</Link>
    </nav>
  );
}

export default NavigationBar;
