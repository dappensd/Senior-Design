//This is for the registration of LIFX devices 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LIFXDeviceRegistration.module.css';

// Code for buttons on Device Type
const DeviceTypeSelector = ({ onDeviceTypeChange, selectedDeviceType }) => {
  const deviceTypes = [
    { id: 'lightbulb', name: 'Lightbulb' },
    { id: 'strip', name: 'Strip' },
    { id: 'beam', name: 'Beam' },
    { id: 'candle', name: 'Candle' },
    { id: 'flex', name: 'Flex' },
    { id: 'downlight', name: 'Downlight' },
    { id: 'switch', name: 'Switch' }
  ];

  // This handles the button click
  const handleDeviceTypeClick = (deviceType) => {
    onDeviceTypeChange(deviceType);
  };

  return (
    <div>
      {deviceTypes.map((device) => (
        <button
          key={device.id}
          type="button"
          className={`${styles.deviceTypeBtn} ${selectedDeviceType === device.id ? styles.selected : ''}`}
          onClick={() => handleDeviceTypeClick(device.id)}
        >
          {device.name}
        </button>
      ))}
    </div>
  );
};

const LIFXDeviceRegistration = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({
    deviceId: '',
    authCode: '',
  });
  const [lifxDeviceType, setLifxDeviceType] = useState(''); // Define a new state variable for lifxDeviceType
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  // Update lifxDeviceType state on button click
  const handleDeviceTypeChange = (deviceType) => {
    setLifxDeviceType(deviceType); // Update lifxDeviceType with the selected device type
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      ...device,
      lifxDeviceType, // Include lifxDeviceType in the payload
    };

    try {
      const response = await fetch('http://localhost:3001/devices/register-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate('/LoggedInHomePage');
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
        <label htmlFor="lifxToken">
          Authentication Token:
            <input type="text" id="lifxToken" name="authCode" value={device.authCode} onChange={handleChange} disabled={loading} />
        </label>
        <div>
          Device Type: 
          <DeviceTypeSelector
            onDeviceTypeChange={handleDeviceTypeChange}
            selectedDeviceType={lifxDeviceType}
          />
        </div>
        <button type="submit" className={styles.formSubmitButton} disabled={loading}>Register Device</button>
      </form>
    </div>
  );
};

export default LIFXDeviceRegistration;
