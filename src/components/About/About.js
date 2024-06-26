import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div className={styles.layout}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <h1>About the Website</h1>
            <img className={styles.banner} src="Images/iotbanner.png" alt="IoT banner" />
            <div className={styles.column}> 
                <div className={styles.left}>
                    <h2>What Does IoT Mean?</h2>
                    <p>
                        IoT stands for "Internet of Things" and refers to devices that do not look like computers, but have pocessing power and the ability to communicate with other devices on a network.
                        IoT devices are common in commercial and home use, and users commonly interect with them on a daily basis.
                        In your home, you may have an Amazon Echo or Google Home as a virtual assistant or a Fitbit or Apple Watch to track health and exercise. Homeowners may have smart home security, or even a smart washer or dryer.
                        Commercially, businesses may have systems with GPS tracking and analysis on company vehicles. Some actively monitor air quality or detect vibrations within buildings.
                        There will be an increase in the number of appliances that will become IoT devices and number of IoT devices  in offices and at home.
                        <br></br>These devices are all covered by the blanket term of "IoT." 
                    </p>
                </div>
                <div className={styles.middle}>
                    <h2>Why Should I Worry About IoT Security?</h2>
                    <p>
                        At their core, IoT devices focus on ease of use and convenience. This is great for casual use and the ability to set up and use an IoT device quickly and easily. 
                        However, since they are designed and tested quickly without considerations for misuse of the appliance, the overall security of the devices tend to suffer. 
                        Iot Devices can be exploited in many different ways, such as using them for data/identity theft by amassing personal credentials, gaining information about a user to use in social engineering attacks, or using the processing power from your device to join a botnet of other devices to conduct Distributed Denial of Service (DDoS) attacks or send mass phishing emails.
                        <br></br>Fortunately, there are options for the user to secure their IoT devices as much as possible to avoid potential attacks. 
                    </p>
                </div> 
                <div className={styles.right}>
                    <h2>What Can I do to Secure my IoT Devices?</h2>
                    <p>
                        The purpose of this website is to assist users in ensuring that their IoT devices are as secure as they can be.
                        As IoT devices become more prevalent in day-to-day life, it is important to make sure we are following best practices to keep ourselves and our information safe.
                        With this website, whether you are using IoT devices in your home or in a commercial setting, you can recieve instructions tailored to your specific devices to secure them as easily as possible.
                        By creating an account and registering your devices, you can simply follow our instructions to help secure your devices.
                    </p>
                </div>
            </div>
            <br></br>
            <h2 style={{fontSize: '1.75em', textAlign: 'center'}}>Contact Us</h2>
            <div className={styles.column}>
                <div className={styles.c1}>
                    <h3>Ryan Carman</h3>
                    <a className={styles.linkColor} href="mailto: carmanrn@mail.uc.edu">carmanrn@mail.uc.edu</a>
                </div>
                <div className={styles.c2}>
                    <h3>Sam Dappen</h3>
                    <a className={styles.linkColor} href="mailto: dappensd@mail.uc.edu">dappensd@mail.uc.edu</a>
                </div>
                <div className={styles.c3}>
                    <h3>Braeden Huth</h3>
                    <a className={styles.linkColor} href="mailto: huthbn@mail.uc.edu">huthbn@mail.uc.edu</a>
                </div>
                <div className={styles.c4}>
                    <h3>Hayes Kennedy</h3>
                    <a className={styles.linkColor} href="mailto: kenne2jh@mail.uc.edu">kenne2jh@mail.uc.edu</a>
                </div>
                <div className={styles.c5}>
                    <h3>Nathan Phillips</h3>
                    <a className={styles.linkColor} href="mailto: phillin4@mail.uc.edu">phillin4@mail.uc.edu</a>
                </div>
            </div>
          
            
        </motion.div>
    )
}

export default About;

