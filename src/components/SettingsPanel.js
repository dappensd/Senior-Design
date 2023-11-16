
import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPanel.css';

function SettingsPanel() {
  return (
    <div class = "settings">
      <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Settings</h1>
      <div> 
        <nav>
           <div class = "themes">
              <Link to="/ThemeSettings">Themes</Link>
          </div>
        </nav>
      </div>
    </div>
    );
  }

export default SettingsPanel;
