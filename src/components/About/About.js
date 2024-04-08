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
                    </p>
                </div>
                <div className={styles.middle}>
                    <h2>Why Should I Worry About IoT Security?</h2>
                    <p>
                        IoT devices focus on ease of use and convenience. 
                        However, since they are designed and tested quickly without considerations for misuse of the appliance, the overall security of the devices tend to suffer. 
                        Iot Devices can be exploited in many different ways, such as using them for data/identity theft by amassing personal credentials, gaining information about a user to use in social engineering attacks, and more.
                    </p>
                </div> 
                <div className={styles.right}>
                    <h2>What Can I do to Secure my IoT Devices?</h2>
                    <p>
                        StayAware is designed to give users instructions tailored to their specific devices to secure them as easily as possible.
                        By creating an account and registering devices, users can help secure and keep them secure from current and future cyberthreats.
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

