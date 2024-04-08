import React from 'react';
import styles from './DeviceManagement.module.css';
import { motion } from 'framer-motion'

function DeviceManagement() {
    return (
        <motion.div className={styles.layout}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div>
                <div>
                    <h1> Device Management </h1>
                </div>

                <div className={styles.content}>
                    <div className={styles.subcontent}>
                    <h2> Adding an LIFX Device </h2>
                            <h3> Instructions: </h3>
                                <ol>
                                    <li> Create an LIFX account at <a href="https://cloud.lifx.com" target="_blank" rel="noreferrer">https//cloud.lifx.com</a></li>
                                    <li> Click on your account in the upper-right corner of the screen, then select <b> Personal Access Tokens</b></li>
                                    <li> Select <b> Generate New Token</b>. You will be given a string of numbers and letters</li>
                                        <ul>
                                            <li><b> Note: </b> You will need to save this token as you will <b> NOT </b> be able to view the token again once you leave the page.</li>
                                            <li> You can choose to generate another token if you forget it by selecting the <b> Generate New Token.</b> </li>  
                                        </ul>
                                    <li> Once you have the token, select <b> Login </b>, then select <b> Sign Up.</b> </li>
                                        <ul>
                                            <li> Enter a username in the <b> Username</b> field.</li>
                                            <li> Enter an email address in the <b> Email Address </b> field.</li>
                                            <li> Enter a unique and strong password in the <b>Password</b> field.</li>
                                            <li> Select the <b> Sign Up </b> to finish creating the account.</li>
                                        </ul>
                                    <li> Once you have an account created, select the <b> Documentation</b> page in the nav bar, then select <b> Add New Device.</b> </li>
                                    <li> Enter a unique name for the <b> Device Name</b> field and the token in the <b>Token</b> field.</li>
                                    <li> Enter the authentication code you saved from your LIFX account in the <b> Authentication Code</b> field.</li>
                                    <li> Click on the button to select the type of LIFX device in the <b> Device Type</b> field. </li>
                                    <li> Click <b> Submit</b> to finish registering your LIFX device.</li>
                                </ol>
                        </div>
                        <br />
                        <div className = {styles.subcontent}>
                    <h2> Adding a RaspberryPi Device:</h2> {/* Ryan will likely need to finish this portion since he was the one that has the RaspberryPi to test */}
                        <h3> Instructions: </h3>
                            <ol>
                                <li> In the <b> Devices </b> section, click <b> Add New Device. </b> Choose <b> RaspberryPi, </b> then select <b> Continue. </b> </li> 
                                <li> Select <b> Download StayAware Setup Script </b> and <b> Download IoT Device Manager </b> to download the necessary scripts to add your RaspberryPi device. </li>
                                
                            </ol>
                    </div>
                    <br />

                    <div className = {styles.subcontent}>    
                    <h2> Adding an "Other" Device </h2>
                            <h3> Instructions </h3>
                                <ol>
                                    <li>In the <b>Devices</b> page, select <b>Add New Device.</b> Select <b>Other Device</b> from the mentu, then select <b>Continue.</b> </li>
                                    <li> Enter your Device Name in the <b>Device Name</b> field and enter the serial nuber of your device in <b>Serial Number.</b> Select <b>Register Device</b> to add your device. </li>
                                </ol>
                        </div>
                </div>  
            </div>


        </motion.div>

    )
}
    
export default DeviceManagement;