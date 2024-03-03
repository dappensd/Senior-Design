// AddDeviceButton.js
import React from 'react';
import styles from './AddDeviceButton.module.css';
import { useNavigate } from 'react-router-dom';

const AddDeviceButton = () => {
    const navigate = useNavigate();
    
    // Handler for button click
    const handleAddDeviceClick = () => {
        navigate('/select-device'); // Navigates to the DeviceRegistration page; Change this to the new route page where the user will select the device they want to add
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
