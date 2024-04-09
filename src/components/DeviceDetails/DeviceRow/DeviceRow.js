// DeviceRow.js
import React from 'react';
import styles from './DeviceRow.module.css';

const DeviceRow = ({ device, onEdit, onViewDetails, onDelete }) => {
  // Adjust to reflect the structure of the device object
  return (
    <tr className={styles.deviceRow}>
      <td>{device.id}</td> {/* Changed from device.deviceId to device.id */}
      <td>{device.deviceType}</td> {/* Assuming you want to display the type */}
      <td>{device.status}</td>
      <td>{device.connectionState}</td>
      <td>
        <button className={`${styles.button} ${styles.viewButton}`} onClick={() => onViewDetails(device)}>View</button>
        <button className={`${styles.button} ${styles.editButton}`} onClick={() => onEdit(device)}>Edit</button>
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => onDelete(device.id, device.partitionKey)}>Delete</button>
      </td>
    </tr>
  );
};

export default DeviceRow;

