import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default NavigationBar;
