// DeviceDetails.js
import React, { useState, useEffect } from 'react';
import styles from './DeviceDetails.module.css';
import AddDeviceButton from './AddDeviceButton/AddDeviceButton';
import DeviceTable from './DeviceTable/DeviceTable';
import SearchBar from './SearchBar/SearchBar';
import TabNavigation from './TabNavigation/TabNavigation';
import FilterSort from './FilterSort/FilterSort';
import { motion } from 'framer-motion';
import axios from 'axios';

// Placeholder for AddDeviceModal
const AddDeviceModal = ({ onClose }) => {
  // Implement your modal logic here
  // Replace with your actual modal component
  return null;
};

// Placeholder for EditDeviceModal
const EditDeviceModal = ({ device, onClose }) => {
  // Implement your modal logic here
  // Replace with your actual modal component
  return null;
};

// Placeholder for ViewDeviceDetailsModal
const ViewDeviceDetailsModal = ({ device, onClose }) => {
  // Implement your modal logic here
  // Replace with your actual modal component
  return null;
};

const DeviceDetails = () => {
  const [originalDevices, setOriginalDevices] = useState([]);
  const [devices, setDevices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Name');
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingDevice, setEditingDevice] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [viewingDevice, setViewingDevice] = useState(null);
  const [activeTab, setActiveTab] = useState('All Devices');

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/devices/devices');
        setDevices(response.data);
        setOriginalDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  // Handlers for search, filter, and sort changes
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    const filteredDevices = originalDevices.filter(device =>
      device.deviceId.toLowerCase().includes(value.toLowerCase()) ||
      device.deviceType.toLowerCase().includes(value.toLowerCase())
    );
    setDevices(filteredDevices);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    if (value === 'All') {
      setDevices(originalDevices);
    } else {
      const filteredDevices = originalDevices.filter(device => device.deviceType === value);
      setDevices(filteredDevices);
    }
  };

  const handleSortChange = (value) => {
    setSort(value);
    const sortedDevices = [...devices].sort((a, b) => {
      if (value === 'Name') {
        return a.deviceId.localeCompare(b.deviceId);
      } else if (value === 'Status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });
    setDevices(sortedDevices);
  };

  const handleAddDeviceClick = () => {
    setShowAddDeviceModal(true);
  };

  const handleEditDevice = (device) => {
    setEditingDevice(device);
    setShowEditModal(true);
  };

  const handleViewDeviceDetails = (device) => {
    setViewingDevice(device);
    setShowDetailsModal(true);
  };

  const handleDeleteDevice = async (deviceId, partitionKeyValue) => {
    if (window.confirm(`Are you sure you want to delete this device?`)) {
        try {
            // Send the partition key value along with the request
            const response = await axios.delete(`http://localhost:3001/devices/devices/${deviceId}`, {
                data: { partitionKey: partitionKeyValue } // send partition key in the request body
            });
        console.log('Device deleted:', response.data);
  
        // Remove the deleted device from the state
        const updatedDevices = devices.filter(device => device.id !== deviceId);
        setDevices(updatedDevices);
        setOriginalDevices(updatedDevices); // If you are using originalDevices
      } catch (error) {
        console.error('Error deleting device:', error);
      }
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
      {showAddDeviceModal && <AddDeviceModal onClose={() => setShowAddDeviceModal(false)} />}
      {showEditModal && <EditDeviceModal device={editingDevice} onClose={() => setShowEditModal(false)} />}
      {showDetailsModal && <ViewDeviceDetailsModal device={viewingDevice} onClose={() => setShowDetailsModal(false)} />}
    </motion.div>
  );
};

export default DeviceDetails;









