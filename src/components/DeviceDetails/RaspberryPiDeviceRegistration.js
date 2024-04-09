import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RaspberryPiDeviceRegistration.module.css';
import { motion } from 'framer-motion';
import { FaSpinner, FaCheck } from 'react-icons/fa';

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
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      
      const responseData = await response.json();

      if (response.ok) {
        setRegistrationComplete(true);
        setTimeout(() => {
          navigate('/'); // Navigate to home page after a delay
        }, 2000); // 2 seconds for user to view the message
      } else {
        setError(responseData.message || 'Registration failed');
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

      {!registrationComplete && (
        <form onSubmit={handleSubmit}>
          <label>
            Device ID:
            <input type="text" name="deviceId" value={device.deviceId} onChange={handleChange} disabled={loading} maxLength={20} />
          </label>
          <label>
            RaspberryPi Device Model:
            <input type="text" name="raspberryPiModel" value={device.deviceSpecificData.raspberryPiModel} onChange={handleChange} disabled={loading} maxLength={20} />
          </label>
          <button type="submit" disabled={loading}>Register Device</button>
        </form>
      )}

      {loading && <p className={styles.loadingText}>Registering Device <FaSpinner className={styles.loadingIcon} /></p>}

      {registrationComplete && !loading && (
        <p className={styles.registrationCompleteText}>
          Device Registered <FaCheck className={styles.checkIcon} />
        </p>
      )}
    </motion.div>
  );
};

export default RaspberryPiDeviceRegistration;
