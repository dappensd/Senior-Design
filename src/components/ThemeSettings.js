
import React from 'react';
import styles from './ThemeSettings.module.css'; // When you apply styles in this file it will become declared and the warning will go away

function ThemeSettings() {
  return (
    <div className={styles.header}>
      Themes
    </div>
  );
}

export default ThemeSettings;
