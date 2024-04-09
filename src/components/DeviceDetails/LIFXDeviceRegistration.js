import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LIFXDeviceRegistration.module.css';

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
  const [lifxDeviceType, setLifxDeviceType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice(prevDevice => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleDeviceTypeChange = (deviceType) => {
    setLifxDeviceType(deviceType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      deviceId: device.deviceId,
      deviceType: 'lifx',
      deviceSpecificData: {
        authCode: device.authCode,
        lifxDeviceType,
      },
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
          <input type="text" name="deviceId"  value={device.deviceId} onChange={handleChange} disabled={loading} maxLength={20} />
        </label>
        <label htmlFor="lifxToken">
          Authentication Token:
            <input type="text" id="lifxToken" name="authCode" value={device.authCode} onChange={handleChange} disabled={loading} maxLength={20} />
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
