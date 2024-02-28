import React from 'react';
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


function Navigation() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className={styles.title}> 
                <h1> Navigating Stay Aware </h1>
            </div>
            <div className={styles.content}>
                <h2> Website Pages: </h2>
                <ul>
                    <li> <Link to= "/"> Home </Link> </li>
                    <li> <Link to= "/Compatibility"> Compatibility </Link> </li>
                    <li> <Link to= "/Devices"> Devices </Link> </li>
                    <li> <Link to= "/About"> About </Link> </li>
                    <li> <Link to= "/Documentation"> Documentation</Link> </li>
                    <li> <Link to= "/Settings"> Settings </Link> </li>
                    <li> <Link to= "/Login"> Login </Link> </li>
                </ul>
                <div className={styles.contentbody}>
                    <div>
                        <h2> Home </h2>
                            <p> This is the main page of the website. The top of the page contains website articles taliored to registered devices. <br />
                                The middle section includes information on the webpage functionality and links to the registration page <br />
                                The bottom section has information on what is available for guest users <br />
                                The top of the page contains the navigation bar that provide links to the most crucial parts of the page. <br />
                                Clicking on each word in the nav bar will open a new tab in the selected browser.
                            </p>
                    </div>

                    <div> 
                        <h2> Compatibility </h2>
                            <p> This is a page containing links to the Azure-compatible devices, including the ones we tested and a full list on Microsoft's official site. <br /><br />
                            </p>
                    </div>

                    <div>
                        <h2> Devices </h2>
                            <p> This page stores all device information connected to Stay Aware. Users can add/remove devices as needed, and, if compatible, can install security updates right to their device!
                            </p>
                    </div>

                    <div>
                        <h2> About </h2>
                            <p> The About page provides additional information on the website and the goals it achieves. <br /> <br />
                                The developers' information is included in the bottom of the web page.
                            </p>
                    </div>

                    <div>
                        <h2> Documentation </h2> 
                            <p> This page includes information on how to navigate the site, logging in and managing IoT devices, and more information on the features of Stay Aware.
                            </p>
                    </div>

                    <div>
                        <h2> Settings </h2>
                            <p> This is the page where users can change the layout of the website, including settign their preferred theme of colors.
                            </p>
                    </div>
                    
                    <div>
                        <h2> Login </h2> 
                            <p> This is the page where users will login with their username and authenticate with their password. <br /> <br /> 
                                Users who do not have an account can also register in this page and will be re-directed to the login page after creating their account. 
                            </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
    
export default Navigation;