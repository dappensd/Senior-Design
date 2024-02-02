// TabNavigation.js
import React from 'react';
import styles from './TabNavigation.module.css';

const TabNavigation = ({ activeTab, onTabClick }) => {
  const tabs = ['All Devices', 'Active Devices', 'Inactive Devices']; // Example tabs

  return (
    <div className={styles.tabContainer}>
      {tabs.map(tab => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
