// DeviceRow.js
import React from 'react';
import styles from './DeviceRow.module.css';

const DeviceRow = ({ device, onEdit, onViewDetails, onDelete }) => {
  return (
    <tr className={styles.deviceRow}>
      <td>{device.name}</td>
      <td>{device.location}</td>
      <td>{device.status}</td>
      <td>{device.lastActive}</td>
      <td>
        <button className={styles.viewButton} onClick={() => onViewDetails(device)}>View</button>
        <button className={styles.editButton} onClick={() => onEdit(device)}>Edit</button>
        <button className={styles.deleteButton} onClick={() => onDelete(device)}>Delete</button>
      </td>
    </tr>
  );
};

export default DeviceRow;
