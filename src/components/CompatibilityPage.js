
import React from 'react';
import './CompatibilityPage.css';

function CompatibilityPage() {
  return (
    <div class="compatibility">
      <h1 style={{fontSize: '2em', fontWeight: 'bold', paddingTop: '80px', textAlign: 'center'}}>Compatible Devices:</h1>
        <dl>
          <dt> LIFX Candle Color Wi-Fi Smart LED Multicolors Light Bulb </dt>
            <dd>- Smart lightbulb that can be controlled from the cloud on iOS, Android, and PC! </dd>
          <div className="link">
            <dd> Check out the lightbulb <a href = 'https://www.amazon.com/LIFX-E12-Candle-Color-Wi-Fi/dp/B07XKYKJ9Q' target="_blank" rel="noreferrer"> here!</a> </dd>
          </div>
          <dt> Rasberry Pi 4 </dt>
            <dd>- Pocket-sized computer that can also function as a smart hub, media centre, and more! </dd>
          <div className = "link">
            <dd> Check out one of the models <a href = 'https://www.amazon.com/Raspberry-Pi-Computer-Suitable-Workstation/dp/B0899VXM8F/ref=sr_1_4?crid=16QK1HD08Y70V&keywords=raspberry+pi+4&qid=1698936765&sprefix=rasberrypi+4%2Caps%2C127&sr=8-4' target="_blank" rel="noreferrer"> here! </a> </dd>
          </div>
        </dl>
    </div>
  );
}

export default CompatibilityPage;
