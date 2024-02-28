
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SettingsPanel.module.css';
import { motion } from 'framer-motion'

function SettingsPanel() {
  return (
    <motion.div className={styles.settings}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h1 style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center'}}>Settings</h1>
      <div> 
        <nav>
           <div className={styles.themes}>
              <Link to="/theme-settings">Themes</Link>
          </div>
        </nav>
      </div>
    </motion.div>
    );
  }

export default SettingsPanel;
