import React from 'react';
import styles from './DeviceManagement.module.css';

function DeviceManagement() {
    return (
        <div className={styles.layout}>
            <div>
                <div>
                    <h1> Device Management </h1>
                </div>

                <div className={styles.content}>
                    <h2> To register your device, follow these steps:</h2>
                        <ol>
                            <li> Click on the Devices page in the navigation </li>
                            <li> Click "Add New Device" </li>
                            <li> Type in the Device ID and click "Register Device" </li>
                        </ol> 
                </div>
            </div>
        </div>

    )
}
    
export default DeviceManagement;