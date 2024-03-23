import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OtherDeviceRegistration.module.css';
import { motion } from 'framer-motion'

const OtherDeviceRegistration = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({
    deviceId: '',
    deviceType: 'otherdevice',
    deviceSpecificData: {
      serialNumber: ''
    }
    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update to handle changes within deviceSpecificData
    if (name === "serialNumber") {
      setDevice(prevDevice => ({
        ...prevDevice,
        deviceSpecificData: {
          ...prevDevice.deviceSpecificData,
          [name]: value
        }
      }));
    } else {
      setDevice(prevDevice => ({
        ...prevDevice,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/devices/register-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceId: device.deviceId,
          deviceType: device.deviceType,
          deviceSpecificData: device.deviceSpecificData
        }),
      });
      
       if (response.ok) {
        navigate('/loggedInHomePage');
      } else {
        const errorMsg = await response.text();
        setError(errorMsg || 'Registration failed');
      }
    } catch (error) {
      setError('Network error: Could not connect to server');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className={styles.registrationContainer}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Device ID:
          <input type="text" name="deviceId" value={device.deviceId} onChange={handleChange} disabled={loading} />
        </label>

        <label>
          Serial Number: 
          <input type="text" name="serialNumber" value={device.deviceSpecificData.serialNumber} onChange={handleChange} disabled={loading} />
         </label>
        <button type="submit" disabled={loading}>Register Device</button>
      </form>
    </motion.div>
  );
};

export default OtherDeviceRegistration;