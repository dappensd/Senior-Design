
import React from 'react';
import './Homepage.css';  // Import styles from HomePage.css
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function HomePage() {
  
  /* news slideshow settings */
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
        <div id="test">
          <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Welcome to Our Website</h1>
          <p style={{textAlign: 'center'}}>This is the home page.</p>
        </div>
        
      <Slider {...settings}>
        <div className="card">
          <img src="Images/article1.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer" >Inadequate IoT protection can be a costly mistake</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article2.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://futureiot.tech/securing-iot-and-connected-devices-is-a-global-challenge/" target="_blank" rel="noreferrer">Securing IoT and connected devices is a global challenge</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article3.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://www.securitymagazine.com/articles/99993-survey-97-face-challenges-securing-iot-and-connected-devices" target="_blank" rel="noreferrer">Survey: 97% face challenges securing IoT & connected devices</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article1.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer" >Inadequate IoT protection can be a costly mistake</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article2.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://futureiot.tech/securing-iot-and-connected-devices-is-a-global-challenge/" target="_blank" rel="noreferrer">Securing IoT and connected devices is a global challenge</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article3.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://www.securitymagazine.com/articles/99993-survey-97-face-challenges-securing-iot-and-connected-devices" target="_blank" rel="noreferrer">Survey: 97% face challenges securing IoT & connected devices</a>
            </div>
        </div>
        <div className="card">
          <img src="Images/article4.jpg" alt="" className="center" />
            <div className="article-link">
              <a href="https://builtin.com/internet-things/iot-devices" target="_blank" rel="noreferrer"> What are some common IoT devices at home and work?</a>
            </div>
        </div>
      </Slider> 
      <br></br>

      <h2>Lorem ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus eget purus hendrerit sodales eu id lectus. Vivamus a dapibus purus, vitae condimentum dui.
         Phasellus sagittis commodo velit, in vestibulum eros dignissim id. Aenean vehicula lorem a est feugiat, ut viverra elit pellentesque. Proin justo nulla, tempor at condimentum non, venenatis id augue. Nulla dictum odio in imperdiet iaculis. Nullam pretium ex sit amet vestibulum varius. Sed in elit lacus. Morbi aliquam pulvinar tortor, a luctus enim pretium sit amet. Aliquam bibendum ex sit amet quam pellentesque ornare. Fusce malesuada neque et eros iaculis, et posuere quam sodales.</p>
    </div>

    
  );
}

export default HomePage;
