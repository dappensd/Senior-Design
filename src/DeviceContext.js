// DeviceContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios'; 

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);

  const registerDevice = async (deviceData) => {
    try {
      const response = await axios.post('/api/devices', deviceData);
      const newDevice = response.data;
      setDevices(prevDevices => [...prevDevices, newDevice]);
      // If we want to redirect the user somewhere after registering a device, this is where we would do it.
    } catch (error) {
      console.error('Error registering device:', error);
      
      throw error; 
    }
  };

  // More device-related functions can be added here

  return (
    <DeviceContext.Provider value={{ devices, registerDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};
