import React from 'react';
import styles from './LoginGuide.module.css';

function LoginGuide() {
    return (
        <div>
            <div className={styles.layout}>
                <h1> Logging Into Stay Aware </h1>
                    <p> *** Note: You MUST Create an Account to Add Devices to Stay Aware *** </p>
                <div className={styles.content}>
                    <h2> To create a Stay Aware account, follow these steps:</h2>
                    <ol>
                        <li> Click the Log In in the menu section </li>
                        <li> Click the "Sign Up" text </li>
                        <li> Add a unique username, email address, and a strong password, then click the blue "Sign Up" button </li>
                    </ol>
                    <b> Note: </b> You will be re-directed back to the main page, where you will see your account username at the bottom
                </div>
            </div>
        </div>

    )
}
    
export default LoginGuide;