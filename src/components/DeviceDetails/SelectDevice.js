import React from 'react';
import styles from './SelectDevice.module.css';
import { Link } from 'react-router-dom';

function SelectDevice () {
return (
    <div className = {styles.content}>
        <h1> Select Which Type of Device You Want to Register: </h1>
            <h2><Link to="/Register-LIFX"> LIFX Device </Link></h2> 
            <h2> <Link to="/Register-RasberryPi"> Rasberry Pi </Link></h2>
            <h2> <Link to="/Register-Other-Device"> Other Device </Link></h2>
    </div>
)

}

export default SelectDevice;
