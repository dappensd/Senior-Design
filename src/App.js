import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutContext } from './layoutcontext'; // Import only LayoutContext


import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './components/Home/HomePage';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';
import DeviceRegistration from './components/DeviceDetails/DeviceRegistration';
import SettingsPanel from './components/Settings/SettingsPanel';
import LoginPage from './components/LoginPage/LoginPage';
import Documentation from './components/Documentation/documentation';
import Navigation from './components/Documentation/Navigation';
import DeviceManagement from './components/Documentation/DeviceManagement';
import LoginGuide from './components/Documentation/LoginGuide';
import Footer from './components/Footer';
import CompatibilityPage from './components/CompatibilityPage/CompatibilityPage';
import About from './components/About/About';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeSettings from './components/Settings/ThemeSettings';


import styles from './App.module.css'; // Ensure this import path is correct

function App() {
  // Use the context here as App is a child of LayoutProvider defined in index.js
  const { isSidebarOpen } = useContext(LayoutContext);

  return (
    <div className={`${styles.App} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
      <NavigationBar />
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/devices" element={<DeviceDetails />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
        <Route path="/settings" element={<SettingsPanel />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme-settings" element={<ThemeSettings />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/Navigation" element={<Navigation />} />
        <Route path="/DeviceManagement" element={<DeviceManagement />} />
        <Route path="/LoginGuide" element={<LoginGuide />} />
        <Route path="/register-device" element={<DeviceRegistration />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;



