import React from 'react';
import styles from './LoginGuide.module.css';
import { motion } from 'framer-motion'

function LoginGuide() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className={styles.layout}>
                <h1> Logging Into Stay Aware </h1>
                    <p> *** Note: You MUST Create an Account to Add Devices to Stay Aware *** </p>
                <div className={styles.content}>
                    <h2> Create a Stay Aware Account: </h2>
                    <ol>
                        <li> Click the Log In in the menu section </li>
                        <li> Click the "Sign Up" text </li>
                        <li> Add a unique username, email address, and a strong password, then click the blue "Sign Up" button </li>
                    </ol>
                    <b> Note: </b> You will be re-directed back to the main page, where you will see your account username at the bottom
                </div>
            </div>
        </motion.div>

    )
}
    
export default LoginGuide;