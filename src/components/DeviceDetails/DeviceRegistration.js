// DeviceRegistration.js
import React, { useState, useContext } from 'react';
import { DeviceContext } from '../../DeviceContext';
import styles from './DeviceRegistration.module.css'; 

const DeviceRegistration = () => {
  const { registerDevice } = useContext(DeviceContext); // Accessing registerDevice from DeviceContext
  const [device, setDevice] = useState({
    name: '',
    location: '',
    status: '',
    lastActive: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice(prevDevice => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerDevice(device); 
  };

  return (
    <div className={styles.registrationContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={device.name} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={device.location} onChange={handleChange} />
        </label>
        <label>
          Status:
          <select name="status" value={device.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <label>
          Last Active:
          <input type="datetime-local" name="lastActive" value={device.lastActive} onChange={handleChange} />
        </label>
        <button type="submit">Register Device</button>
      </form>
    </div>
  );
};

export default DeviceRegistration;

