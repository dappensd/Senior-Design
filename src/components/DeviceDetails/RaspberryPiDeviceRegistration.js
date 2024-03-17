import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RaspberryPiDeviceRegistration.module.css';
import { motion } from 'framer-motion';

const RaspberryPiDeviceRegistration = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({
    deviceId: '',
    deviceType: '',
    location: '',
    // ...other fields...
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice(prevDevice => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/devices/register-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(device),
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
        {/* ... other form fields ... */}
        <button type="submit" disabled={loading}>Register Device</button>
      </form>
    </motion.div>
  );
};

export default RaspberryPiDeviceRegistration;