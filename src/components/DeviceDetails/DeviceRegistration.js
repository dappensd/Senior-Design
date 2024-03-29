import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DeviceRegistration.module.css';

const DeviceRegistration = () => {
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
        navigate('/'); // Navigate to a success page or display a success message
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
    <div className={styles.registrationContainer}>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Device ID:
          <input type="text" name="deviceId" value={device.deviceId} onChange={handleChange} disabled={loading} />
        </label>
        {/* ... other form fields ... */}
        <button type="submit" disabled={loading}>Register Device</button>
      </form>
    </div>
  );
};

export default DeviceRegistration;


