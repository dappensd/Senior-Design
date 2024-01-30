import React from 'react';
import styles from './CompatibilityPage.module.css';

function CompatibilityPage() {
  return (
    <div className={styles.content}>
      <h1> Compatible Devices: </h1>

        <div>
          <dl>

            <div>
              <dt> <a href='https://www.amazon.com/LIFX-E12-Candle-Color-Wi-Fi/dp/B07XKYKJ9Q' target="_blank" rel=" noopener noreferrer"> LIFX Candle Color Wi-Fi Smart LED Multicolors Light Bulb </a> </dt>
                <dd>- Smart light bulb that can be controlled from the cloud on iOS, Android, and PC! </dd>
            </div>

            <div>
              <dt> <a href='https://www.amazon.com/Raspberry-Pi-Computer-Suitable-Workstation/dp/B0899VXM8F/ref=sr_1_4?crid=16QK1HD08Y70V&keywords=raspberry+pi+4&qid=1698936765&sprefix=rasberrypi+4%2Caps%2C127&sr=8-4' target="_blank" rel="noopener noreferrer"> Rasberry Pi 4 </a> </dt>
                <dd>- Pocket-sized computer that can also function as a smart hub, media centre, and more! </dd>
            </div>

            <div>
              <dt> <a href='https://www.amazon.com/LIFX-L3A19LW06E26CA-Dimmable-Required-Compatible/dp/B08XTT8WZJ' target="_blank" rel="noopener noreferrer"> LIFX E26 Edison Screw Ligh Bulb </a> </dt>
                <dd> -Smart light bulb that can be controlled from the cloud on iOS, Android, and PC! </dd>
            </div>

            <div>
              <dt> <a href= 'https://devicecatalog.azure.com/featured' target="_blank" rel="noopener noreferrer"> Azure Compatibility Catelogue </a></dt>
                <dd>- For more devices compatible with Azure services </dd>
            </div>

          </dl>
        </div>
    </div>
  );
}

export default CompatibilityPage;

