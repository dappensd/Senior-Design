// DeviceDetails.js
import React, { useState, useEffect } from 'react';
import styles from './DeviceDetails.module.css';
import AddDeviceButton from './AddDeviceButton/AddDeviceButton'; 
import DeviceTable from './DeviceTable/DeviceTable';
import SearchBar from './SearchBar/SearchBar';
import TabNavigation from './TabNavigation/TabNavigation';
import FilterSort from './FilterSort/FilterSort';
import { motion } from 'framer-motion'
import axios from 'axios';



const DeviceDetails = () => {
  const [devices, setDevices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Name');
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(false); // State to control the visibility of the add device modal
  const [activeTab, setActiveTab] = useState('All Devices');

  useEffect(() => {
// Function to fetch devices
const fetchDevices = async () => {
  try {
    const response = await axios.get('http://localhost:3001/devices/devices');
    setDevices(response.data);
    console.log(devices);
  } catch (error) {
    console.error('Error fetching devices:', error); 
    // Handle error appropriately
  }
};

fetchDevices();
}, []); 

  // Handlers for search, filter, and sort changes
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // Implement the logic to handle search term change
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    // Implement the logic to handle filter change
  };

  const handleSortChange = (value) => {
    setSort(value);
    // Implement the logic to handle sort change
  };

  // Handler to be called when the add device button is clicked
  const handleAddDeviceClick = () => {
    // Here we can set the state to true to show the modal or form
    setShowAddDeviceModal(true);
  };

  const AddDeviceModal = () => {
    // Placeholder for AddDeviceModal
    // Implement your modal logic here
    return null; // Return null or actual modal component
  };

  const handleEditDevice = (device) => {
    // We could set the state here to show a modal or form for editing
    // and pass the selected device's details to the form
    console.log('Editing device:', device);
    // For example: setShowEditModal(true); setEditingDevice(device);
  };
   
  const handleViewDeviceDetails = (device) => {
    // We can handle the logic to view details here
    // Maybe open a modal with the device's details
    console.log('Viewing details for device:', device);
    // For example: setShowDetailsModal(true); setViewingDevice(device);
  };
  
  const handleDeleteDevice = (device) => {
    // Confirm before deleting
    if (window.confirm(`Are you sure you want to delete ${device.name}?`)) {
      console.log('Deleting device:', device);
      // Here we could  make an API call to delete the device
      // Then, we would update your state to remove the device from the list
      // For example:
      // deleteDeviceApi(device.id).then(() => {
      //   setDevices(devices.filter(d => d.id !== device.id));
      // });
    }
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Additional logic to filter devices based on the selected tab
  };

  return (
    <motion.div className={styles.deviceDetails}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <TabNavigation activeTab={activeTab} onTabClick={handleTabClick} />
      <div className={styles.searchFilterSection}>
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <FilterSort filter={filter} onFilterChange={handleFilterChange} sort={sort} onSortChange={handleSortChange} />
      </div>
      <DeviceTable 
       devices={devices} 
       onEdit={handleEditDevice}
       onViewDetails={handleViewDeviceDetails}
       onDelete={handleDeleteDevice}
      />
      {isLoggedIn && <AddDeviceButton onAddDevice={handleAddDeviceClick} />}
    
      {showAddDeviceModal && (
        // Here we would include our modal or form component for adding a device
        <AddDeviceModal onClose={() => setShowAddDeviceModal(false)} />
      )}
    </motion.div>
  );
};

export default DeviceDetails;








