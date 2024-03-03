import React from 'react';
import styles from './CompatibilityPage.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion'

function CompatibilityPage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <motion.div className={styles.content}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <h1> Compatible Devices: </h1>
      <div className={styles.description}>
      <Slider {...settings}>
          <div>
            <img src="Images/SmartBulb.jpg" alt="" className={styles.center} />
            <p className={styles.productname}>LIFX Candle Color Wi-Fi Smart LED Multicolors Light Bulb</p>
            <p className={styles.productdesc}>Smart light bulb that can be controlled from the cloud on iOS, Android, and PC</p>
            <a href="https://www.amazon.com/LIFX-E12-Candle-Color-Wi-Fi/dp/B07XKYKJ9Q" target="_blank" rel="noreferrer" className={styles.productlink}>Click Here to Purchase</a>
          </div>
          <div>
            <img src="Images/RaspberryPi4.jpg" alt="" className={styles.center} />
            <p className={styles.productname}>Raspberry Pi 4</p>
            <p className={styles.productdesc}>Pocket-sized computer that can also function as a smart hub, media centre, and more!</p>
            <a href="https://www.amazon.com/Raspberry-Pi-Computer-Suitable-Workstation/dp/B0899VXM8F/ref=sr_1_4?crid=16QK1HD08Y70V&keywords=raspberry+pi+4&qid=1698936765&sprefix=rasberrypi+4%2Caps%2C127&sr=8-4" target="_blank" rel="noreferrer" className={styles.productlink}>Click Here to Purchase</a>
          </div>
          <div>
            <img src="Images/LIFXbulb.jpg" alt="" className={styles.center} />
            <p className={styles.productname}>LIFX E26 Edison Screw Ligh Bulb </p>
            <p className={styles.productdesc}>Smart light bulb that can be controlled from the cloud on iOS, Android, and PC</p>
            <a href="https://www.amazon.com/LIFX-L3A19LW06E26CA-Dimmable-Required-Compatible/dp/B08XTT8WZJ" target="_blank" rel="noreferrer" className={styles.productlink}>Click Here to Purchase</a>
          </div>
        </Slider>
        </div>
        
        
        <div className={styles.subcontent}>
          <a href= 'https://devicecatalog.azure.com/featured' target="_blank" rel="noopener noreferrer" style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline'}}> Azure Compatibility Catalog </a>
          <h3>Check out the Azure Device Catalog for a Full List of Compatible Devices</h3>
            
        </div>
    </motion.div>
  );
}

export default CompatibilityPage;

