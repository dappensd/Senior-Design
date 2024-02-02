import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../useauth';
import styles from './NavigationBar.module.css'; // Import styles using CSS Modules

function NavigationBar() {
  const { isLoggedIn, logout } = useAuth(); // Use the auth context
  console.log('NavigationBar isLoggedIn:', isLoggedIn);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles['navbar-title']}><Link to="/" className={styles['nav-link']}>Stay Aware</Link></h1>
      <div className={styles['navbar-links']}>
        <Link to="/compatibility" className={styles['nav-link']}>Compatibility</Link>
        <Link to="/devices" className={styles['nav-link']}>Devices</Link>
        <Link to="/about" className={styles['nav-link']}>About</Link>
        <Link to="/documentation" className={styles['nav-link']}>Documentation</Link>
        <Link to="/settings" className={styles['nav-link']}>Settings</Link>
        
      </div>
      <div className={styles['navbar-spacer']}></div>
      {isLoggedIn ? (
        <button onClick={logout} className={styles['nav-link-right']}>Log Out</button>
      ) : (
        <Link to="/login" className={styles['nav-link-right']}>Log In</Link>
      )}
    </nav>
  );
}

export default NavigationBar;



