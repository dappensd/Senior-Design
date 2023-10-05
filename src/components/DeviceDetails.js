import React from 'react';

const mockDeviceDetails = {
    id: 1,
    name: 'Device 1',
    status: 'Online',
    lastConnected: '2023-09-10 10:00:00',
    ipAddress: '192.168.1.10',
    // ... add more details as needed
  };
  

function DeviceDetails() {
  // TODO: Fetch details of the selected device from the API

  return (
    <div>
      <h2>{mockDeviceDetails.name}</h2>
      <p>Status: {mockDeviceDetails.status}</p>
      <p>Last Connected: {mockDeviceDetails.lastConnected}</p>
      <p>IP Address: {mockDeviceDetails.ipAddress}</p>  
      {/* Render device details here */}
    </div>
  );
}

export default DeviceDetails;
