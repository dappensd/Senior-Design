// NavigationBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../useauth';
import { LayoutContext } from '../../layoutcontext';
import styles from './NavigationBar.module.css';
import { FaTabletAlt, FaInfo, FaBook, FaSignInAlt, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { DiAptana } from "react-icons/di";
import { RiCheckboxMultipleLine } from "react-icons/ri";

function NavigationBar() {
  const { isLoggedIn, logout } = useAuth();
  const { isSidebarOpen, toggleSidebar } = useContext(LayoutContext);

    // Function to toggle the sidebar
    const handleToggleSidebar = () => {
      toggleSidebar(); // Toggle the state value
    };

  return (
    <>
      <button onClick={handleToggleSidebar} className={styles.burger}>
        {/* Icon or burger menu lines here */}
        <span className={styles.icon}></span>
        <span className={styles.icon}></span>
        <span className={styles.icon}></span>
      </button>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logo}>
        <span>StayAware</span>
        </div>
        <nav className={styles.navMenu}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}><FaHome className={styles.navIcon} /> Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/compatibility" className={styles.navLink}><RiCheckboxMultipleLine className={styles.navIcon} /> Compatibility</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/devices" className={styles.navLink}><FaTabletAlt className={styles.navIcon} /> Devices</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}><FaInfo className={styles.navIcon} /> About</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/documentation" className={styles.navLink}><FaBook className={styles.navIcon} /> Documentation</Link>
            </li>
            {isLoggedIn ? (
              <li className={styles.navItem}>
                <button onClick={logout} className={styles.navLink}><FaSignOutAlt className={styles.navIcon} /> Log Out</button>
              </li>
            ) : (
              <li className={styles.navItem}>
                <Link to="/login" className={styles.navLink}><FaSignInAlt className={styles.navIcon} /> Log In</Link>
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default NavigationBar;







