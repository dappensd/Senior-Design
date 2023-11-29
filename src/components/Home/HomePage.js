import React from 'react';
import styles from './Homepage.module.css'; // Import styles from HomePage.module.css
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <div>
        <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Welcome to Our Website</h1>
      </div>
      <div className={styles.description}>
        <h2> Credible Articles for Device Protection: </h2>
        <Slider {...settings}>
          <div className={styles.card}>
            <img src="Images/article1.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer" >Inadequate IoT protection can be a costly mistake</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article2.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://futureiot.tech/securing-iot-and-connected-devices-is-a-global-challenge/" target="_blank" rel="noreferrer">Securing IoT and connected devices is a global challenge</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article3.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.securitymagazine.com/articles/99993-survey-97-face-challenges-securing-iot-and-connected-devices" target="_blank" rel="noreferrer">Survey: 97% face challenges securing IoT & connected devices</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article1.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer" >Inadequate IoT protection can be a costly mistake</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article2.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://futureiot.tech/securing-iot-and-connected-devices-is-a-global-challenge/" target="_blank" rel="noreferrer">Securing IoT and connected devices is a global challenge</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article3.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://www.securitymagazine.com/articles/99993-survey-97-face-challenges-securing-iot-and-connected-devices" target="_blank" rel="noreferrer">Survey: 97% face challenges securing IoT & connected devices</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article5.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://venturebeat.com/security/why-attackers-love-to-target-iot-devices/" target="_blank" rel="noreferrer"> Why Attackers Love to Target IoT Devices</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="Images/article4.jpg" alt="" className={styles.center} />
            <div className={styles.articleLink}>
              <a href="https://builtin.com/internet-things/iot-devices" target="_blank" rel="noreferrer"> What are some common IoT devices at home and work?</a>
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.description}>
        <h2> Register, Manage, and Help Protect Your Devices All In One Place </h2>
        <p> Stay Aware is an all-in-one solution for learning how to protect your IoT devices from cyberthreats. New threats emerge every day and as more IoTs find their way into businesses and homes, Stay Aware will help owners keep their devices protected.</p>
        <p style={{textAlign:'center'}}>To create an account to register your IoT device, click here! </p>
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
    </div>
  );
}

export default HomePage;