
import React from 'react';
import styles from './ThemeSettings.module.css';
function ThemeSettings() {
  return (
    <body> 
      <div>
        <div className={styles.title}>
          <h1> Themes </h1> {/* This is where we will implement the Light/Dark Mode option */}
        </div>
        <div className={styles.content}>
          <h2> Light </h2>
          <h2> Dark </h2>
        </div>
      </div>
    </body>
  );
}

export default ThemeSettings;
