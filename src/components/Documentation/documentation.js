import React from 'react';
import { Link } from 'react-router-dom';
import styles from './documentation.module.css';

function Documentation() {
    return (
        <body className={styles.layout}>
            <h1>Documentation</h1>
                <h2> <Link to="/Navigation"> Navigating the Website </Link> </h2>
                <h2> <Link to="/DeviceManagement"> Device Management </Link> </h2>
                <h2> <Link to="/LoginGuide"> Logging Into Stay Aware </Link> </h2>

        </body>
    )
}
    
export default Documentation;