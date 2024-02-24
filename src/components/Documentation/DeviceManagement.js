import React from 'react';
import styles from './DeviceManagement.module.css';

function DeviceManagement() {
    return (
        <div className={styles.layout}>
            <div>
                <div>
                    <h1> Device Management </h1>
                </div>

                <div className={styles.content}>
                    <h2> Adding an LIFX Device </h2>
                        <h3> Requirements: </h3>
                            <ul>
                                <li> An LIFX Account </li>
                                <li> Device Name </li>
                                <li> LIFX Device </li>
                            </ul>
                        <div className={styles.subcontent}>
                            <h3> Instructions: </h3>
                                <ol>
                                    <li> Create an LIFX account at <a href="https://cloud.lifx.com" target="_blank" rel="noreferrer">https//cloud.lifx.com</a></li>
                                    <li> Click on your account in the upper-right corner of the screen, then select <b> Personal Access Tokens</b></li>
                                    <li> Select <b> Generate New Token</b>. You will be given a string of numbers and letters</li>
                                        <ul>
                                            <li><b> Note: </b> You will need to save this token as you will <b> NOT </b> be able to view the token again once you leave the page</li>
                                            <li> You can choose to generate another token if you forget it by selecting the <b> Generate New Token</b> </li>  
                                        </ul>
                                    <li> Once you have the token, select <b> Login </b>, then select <b> Sign Up.</b> </li>
                                        <ul>
                                            <li> Enter a username in the <b> Username</b> field.</li>
                                            <li> Enter an email address in the <b> Email Address </b> field.</li>
                                            <li> Enter a unique and strong password in the <b>Password</b> field.</li>
                                            <li> Select the <b> Sign Up </b> to finish creating the account.</li>
                                        </ul>
                                    <li> Once you have an account created, select the <b> Documentation</b> page in the nav bar, then select <b> Add New Device</b> </li>
                                    <li> Enter a unique name for the <b>Device ID</b> field and the token in the <b>Token</b> field.</li>
                                </ol>
                        </div>
                </div>  
            </div>
        </div>

    )
}
    
export default DeviceManagement;