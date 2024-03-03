import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LIFXDeviceRegistration.module.css';

// Standalone DeviceTypeSelector Component
const DeviceTypeSelector = ({ onDeviceTypeChange, selectedDeviceType }) => {
  // Device types could be extended or fetched from an API
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
    deviceType: '',
    authtoken: '',
    // Add other necessary fields as needed
  });
  const [selectedDeviceType, setSelectedDeviceType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  // Update deviceType state on selection
  const handleDeviceTypeChange = (deviceType) => {
    setDevice((prevDevice) => ({
      ...prevDevice,
      deviceType: deviceType,
    }));
    setSelectedDeviceType(deviceType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Assuming your API endpoint and request configuration
      const response = await fetch('http://localhost:3001/devices/register-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(device),
      });

      if (response.ok) {
        navigate('/success'); // Navigate to a success page or display a success message
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
        <label>
          Authentication Token:
          <input type="password" name="authtoken" value={device.authtoken} onChange={handleChange} disabled={loading} />
        </label>
        <div>
          Device Type: 
          <DeviceTypeSelector
            onDeviceTypeChange={handleDeviceTypeChange}
            selectedDeviceType={selectedDeviceType}
          />
        </div>
        <button type="submit" className={styles.formSubmitButton} disabled={loading}>Register Device</button>
      </form>
    </div>
  );
};

export default LIFXDeviceRegistration;
