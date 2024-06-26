import React, { useContext } from 'react';
import styles from './Homepage.module.css'; // Import styles from HomePage.module.css
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthContext } from '../../auth-context';
import { motion } from 'framer-motion'

  function SlideArrows(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function LoggedInHomePage() {
    const { user } = useContext(AuthContext);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <SlideArrows />,
      nextArrow: <SlideArrows />
    };
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <div>
        <h1 style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center'}}>Welcome to Our Website</h1>
        {
           user
           ? <p>Welcome back, {user.username}!</p>
           : <p>Please <a href="/login">log in</a> or <a href="/register">register</a>.</p>
        }

      </div>
      <div className={styles.description}>
        <h2> Articles for Protecting Devices: </h2>
        <Slider {...settings}>
          
           <div className={styles.card}>
            <img src="Images/article4.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://builtin.com/internet-things/iot-devices" target="_blank" rel="noreferrer"> What are some common IoT devices at home and work?</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article1.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer" >Inadequate IoT Protection Can Be a Costly Mistake</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article2.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://futureiot.tech/securing-iot-and-connected-devices-is-a-global-challenge/" target="_blank" rel="noreferrer">Securing IoT and Connected Devices is a Global Challenge</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article3.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.securitymagazine.com/articles/99993-survey-97-face-challenges-securing-iot-and-connected-devices" target="_blank" rel="noreferrer">Survey: 97% Face Challenges Securing IoT & Connected Devices</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article5.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://venturebeat.com/security/why-attackers-love-to-target-iot-devices/" target="_blank" rel="noreferrer"> Why Attackers Love to Target IoT Devices</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article8.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.theverge.com/2021/3/9/22322122/verkada-hack-150000-security-cameras-tesla-factory-cloudflare-jails-hospitals" target="_blank" rel="noreferrer"> Verkada Hack Exposes 150,000 Security Cameras</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article9.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://robots.net/tech/what-is-iot-hub/" target="_blank" rel="noreferrer"> What is an IoT Hub?</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article6.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.byos.io/blog/iot-device-security" target="_blank" rel="noreferrer"> Four IoT Device Security Best Practices for Every Organization</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="Images/article7.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.ul.com/insights/us-cyber-trust-mark" target="_blank" rel="noreferrer"> The US Cyber Trust Mark </a>
            </div>
          </div>

        </Slider>
      </div>
      <div className={styles.description}>
        <h2> Register, Manage, and Help Protect Your Devices All In One Place </h2>
        <p> Stay Aware is an all-in-one solution for learning how to protect your IoT devices from cyberthreats. New threats emerge every day and as more IoTs find their way into businesses and homes, Stay Aware will help owners keep their devices protected.</p>
        <p style={{textAlign:'center'}}>To create an account to register your IoT device, click <a href = "http://localhost:3000/register" target="_blank" rel="noreferrer" style={{ color: 'black' }}> here!</a> </p>
      </div>
      <div className={styles.description}>
        <h2> Download Security Scripts Right to Your Device! </h2>
        <p> Users are given the opportunity to download scripts from credible resources to patch security issues as they arise. There is a description of what the script does and shows the user how to download it. All registered users with a connected device will be eligible to download the script.</p>
        <p> <b>Note:</b> Users <b>MUST</b> choose to download the scripts for their registered IoT device. Stay Aware does <b>NOT</b> automatically install scripts without the user's consent.</p>
      </div>
      <div className={styles.description}>
        <h2> Don't Want to Register? Stay Aware Can Still Help! </h2>
        <p style={{textAlign: 'center'}}> If you decide not to register an account, you can still access our updated newsletters on the latest threats to IoT security! Just click on any of the article links provided. </p>
      </div>
    </motion.div>
  );
}

export default LoggedInHomePage;