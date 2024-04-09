// DeviceRow.js
import React from 'react';
import styles from './DeviceRow.module.css';

const DeviceRow = ({ device, onEdit, onViewDetails, onDelete }) => {
  return (
    <tr className={styles.deviceRow}>
      <td>{device.id}</td>
      <td>{device.deviceType}</td>
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


