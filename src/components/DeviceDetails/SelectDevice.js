import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SelectDevice.module.css';

function SelectDevice() {
  const [deviceType, setDeviceType] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setDeviceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // This prevents the form from submitting traditionally
    if (deviceType) {
      navigate(`/Register-${deviceType}`);
    } else {
      // You can add some error handling here if you like
    }
  };

  return (
    <div className={styles.content}>
      <h1>Select Which Type of Device You Want to Register:</h1>
      <form onSubmit={handleSubmit}>
        {/* Here we apply the labelDevice class to the label */}
        <label htmlFor="device-select" className={styles.labelDevice}>
          Choose a device:
        </label>
        <select
          id="device-select"
          value={deviceType}
          onChange={handleSelectChange}
          className={styles.selectDevice}
        >
          <option value="">Select a device...</option>
          <option value="LIFX">LIFX Device</option>
          <option value="RaspberryPi">Raspberry Pi</option>
          <option value="Other-Device">Other Device</option>
        </select>
        <button type="submit" className={styles.submitButton}>
          Continue
        </button>
      </form>
      {deviceType === 'RaspberryPi' && (
        <div className={styles.downloadLinks}>
          <h2>Download Configuration Scripts for Raspberry Pi</h2>
          <a href={`${process.env.PUBLIC_URL}/downloads/setupStayAware.sh`} download="setupStayAware.sh" className={styles.downloadLink}>
            Download StayAware Setup Script
          </a>
          <a href={`${process.env.PUBLIC_URL}/downloads/iotDeviceManager.js`} download="iotDeviceManager.js" className={styles.downloadLink}>
            Download IoT Device Manager
          </a>
        </div>
      )}
    </div>
  );
}

export default SelectDevice;




