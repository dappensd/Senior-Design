import React from 'react';
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <div>
            <div className={styles.title}> 
                <h1> Navigating Stay Aware </h1>
            </div>
            <div className={styles.content}>
                <h2> Website Pages: </h2>
                <ul>
                    <li> Home </li>
                    <li> Compatibility </li>
                    <li> Devices </li>
                    <li> About </li>
                    <li> Documentation </li>
                    <li> Settings </li>
                    <li> Login </li>
                </ul>
                
                <h2> Home </h2>
                    <p> This is the main page of the website. The top of the page contains website articles taliored to registered devices. <br /><br />
                        The middle section includes information on the webpage functionality and links to the registration page <br /><br />
                        The bottom section has information on what is available for guest users <br /><br />
                        The top of the page contains the navigation bar that provide links to the most crucial parts of the page. <br />
                        Clicking on each word in the nav bar will open a new tab in the selected browser.
                    </p>
                
                <h2> Compatibility </h2>
                    <p> This is a page containing links to the Azure-compatible devices, including the ones we tested and a full list on Microsoft's official site. <br /><br />
                    </p>
                
                <h2> Devices </h2>
                <p> This page stores all device information connected to Stay Aware. Users can add/remove devices as needed, and, if compatible, can install security updates right to their device!
                </p>

                <h2> About </h2>
                <p> The About page provides additional information on the website and the goals it achieves. <br /> <br />
                    The developers' information is included in the bottom of the web page.
                </p>

                <h2> Documentation </h2> 
                <p> This page includes information on how to navigate the site, logging in and managing IoT devices, and more information on the features of Stay Aware.</p>

                <h2> Settings </h2>
                <p> This is the page where users can change the layout of the website, including settign their preferred theme of colors.</p>

                <h2> Login </h2> 
                <p> This is the page where users will login with their username and authenticate with their password. <br /> <br /> 
                    Users who do not have an account can also register in this page and will be re-directed to the login page after creating their account. 
                </p>

                
                
            </div>
        </div>
    )
}
    
export default Navigation;