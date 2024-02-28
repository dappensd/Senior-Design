import React from 'react';
import { Link } from 'react-router-dom';
import styles from './documentation.module.css';
import { motion } from 'framer-motion'

function Documentation() {
    return (
        <motion.div className={styles.layout}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Documentation</h1>
                <h2> <Link to="/Navigation"> Navigating the Website </Link> </h2>
                <h2> <Link to="/DeviceManagement"> Device Management </Link> </h2>
                <h2> <Link to="/LoginGuide"> Logging Into Stay Aware </Link> </h2>

        </motion.div>
    )
}
    
export default Documentation;