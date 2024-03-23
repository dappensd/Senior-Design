import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RaspberryPiDeviceRegistration.module.css';
import { motion } from 'framer-motion';

const RaspberryPiDeviceRegistration = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({
    deviceId: '',
    deviceType: 'raspberrypi',
    serialNumber: '',
    deviceSpecificData: {
      raspberryPiModel: ''
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Special handling for deviceSpecificData variable
    if (name === "raspberryPiModel") {
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
          [name]: value,
        }));
      }
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      deviceId: device.deviceId,
      deviceType: device.deviceType,
      deviceSpecificData: device.deviceSpecificData
    };

    try {
      const response = await fetch('http://localhost:3001/devices/register-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
       if (response.ok) {
        navigate('/LoggedInHomePage'); // Navigate to a success page or display a success message
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
          RaspberryPi Device Model:
            <input type="text" name="raspberryPiModel" value={device.deviceSpecificData.raspberryPiModel} onChange={handleChange} disabled={loading} />
        </label>

        <button type="submit" disabled={loading}>Register Device</button>
      </form>
    </motion.div>
  );
};

export default RaspberryPiDeviceRegistration;