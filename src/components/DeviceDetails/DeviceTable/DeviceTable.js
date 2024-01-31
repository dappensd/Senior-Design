// DevicesTable.js
import React from 'react';
import DeviceRow from '../DeviceRow/DeviceRow';
import styles from './DeviceTable.module.css';

const DevicesTable = ({ devices, onEdit, onViewDetails, onDelete }) => {
  return (
    <table className={styles.devicesTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Status</th>
          <th>Last Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => (
          <DeviceRow
            key={device.id}
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
