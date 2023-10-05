// DeviceList.js
import React from 'react';

const mockDevices = [
  { id: 1, name: 'Device 1', status: 'Online' },
  { id: 2, name: 'Device 2', status: 'Offline' },
  // ... add more mock devices
];

function DeviceList() {
  return (
    <div>
      <h2>Devices</h2>
      <ul>
        {mockDevices.map(device => (
          <li key={device.id}>
            {device.name} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;

