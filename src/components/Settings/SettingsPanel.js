
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SettingsPanel.module.css';

function SettingsPanel() {
  return (
    <div className={styles.settings}>
      <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Settings</h1>
      <div> 
        <nav>
           <div className={styles.themes}>
              <Link to="/theme-settings">Themes</Link>
          </div>
        </nav>
      </div>
    </div>
    );
  }

export default SettingsPanel;
