// AddDeviceButton.js
import React from 'react';
import styles from './AddDeviceButton.module.css';

const AddDeviceButton = ({ onAddDevice }) => {
  return (
  <div className={styles.buttonWrapper}>
    <button className={styles.addButton} onClick={onAddDevice}>
      Add New Device
    </button>
  </div>  
  );
};

export default AddDeviceButton;
