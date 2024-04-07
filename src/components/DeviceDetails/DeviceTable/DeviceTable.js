// DevicesTable.js
import React from 'react';
import DeviceRow from '../DeviceRow/DeviceRow';
import styles from './DeviceTable.module.css';

const DevicesTable = ({ devices, onEdit, onViewDetails, onDelete }) => {
  // Place console.log outside of JSX to avoid DOM validation warnings
  console.log(devices);

  return (
    <table className={styles.devicesTable}>
      <thead>
        <tr>
          <th>Device ID</th>
          <th>Type</th> {/* Changed from Model to Type */}
          <th>Status</th>
          <th>Connection State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <DeviceRow
            key={device.id} // Changed from device.deviceId to device.id
            device={device}
            onEdit={onEdit}
            onViewDetails={onViewDetails}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DevicesTable;


