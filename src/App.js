
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import SettingsPanel from './components/SettingsPanel';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import CompatibilityPage from './components/CompatibilityPage';
import './App.css';
import RegistrationPage from './components/RegistrationPage'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compatibility" element={<CompatibilityPage />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/device/:id" element={<DeviceDetails />} />
          <Route path="/settings" element={<SettingsPanel />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
