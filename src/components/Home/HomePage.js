
import React from 'react';
import './Homepage.css';  // Import styles from HomePage.css


function HomePage() {
  return (
      <>
        <div id="test">
          <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Welcome to Our Website</h1>
          <p>This is the home page.</p>
        </div>

        <div class="news-slideshow">
          {/*slideshow images and article titles*/}
          <div class="newsfeed-slide fade">
            <div class="slidenumber">2 / 3</div>
            <img src="Images/article1.jpg" style={{ width: '100%' }} alt=""/> {/* style={{ width: '100%' }} */}
            <div class="articlelink">
              <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer">Inadequate IoT protection can be a costly mistake</a>
            </div>
            </div>

          <div class="newsfeed-slide fade">
              <div class="slidenumber">2 / 3</div>
              <img src="Images/article2.jpg" style={{ width: '100%' }} alt=""/> {/* style={{ width: '100%' }} */}
              <div class="articlelink">
                <a href="https://www.helpnetsecurity.com/2023/10/16/iot-security-strategy/" target="_blank" rel="noreferrer">Inadequate IoT protection can be a costly mistake</a>
              </div>
          </div>

          {/*pev/next buttons*/}
          <a class="prev" onclick="nextSlide(-1)">&#10094;</a>
          <a class="next" onclick="nextSlide(1)">&#10095;</a>

        </div>
        <br></br>
        
        <div style={{textalign: 'center'}}>
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>

        
      </>
  );
}

export default HomePage;
