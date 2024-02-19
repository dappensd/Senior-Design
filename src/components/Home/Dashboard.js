// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'; // Make sure to create this CSS module file

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleMoreInfo = () => {
    navigate('/about');
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.mainHeading}>Welcome to StayAware</h1>
      <p className={styles.subHeading}>Secure and manage your IoT devices efficiently.</p>
      <div className={styles.buttonContainer}>
        <button onClick={handleRegister} className={styles.registerButton}>Register</button>
        <button onClick={handleMoreInfo} className={styles.moreInfoButton}>More Info</button>
      </div>
      <p className={styles.signInPrompt}>
        Already have an account? <span onClick={() => navigate('/login')} className={styles.signInLink}>Sign in</span>.
      </p>
    </div>
  );
};

export default Dashboard;