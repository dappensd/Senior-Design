// AddDeviceButton.js
import React from 'react';
import styles from './AddDeviceButton.module.css';
import { useNavigate } from 'react-router-dom';

const AddDeviceButton = () => {
    const navigate = useNavigate();
    
    // Handler for button click
    const handleAddDeviceClick = () => {
        navigate('/register-device'); // Navigates to the DeviceRegistration page
    };

    return (
        <div className={styles.buttonWrapper}>
            <button 
                className={styles.addButton} 
                onClick={handleAddDeviceClick} // Attach the handler to the onClick event
            >
                Add New Device
            </button>
        </div>  
    );
};

export default AddDeviceButton;
