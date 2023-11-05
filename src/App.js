
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './components/Home/HomePage';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';
import SettingsPanel from './components/SettingsPanel';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer';
import CompatibilityPage from './components/CompatibilityPage';
import About from './components/About/About';
import './App.css';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import BlueCurveSection from './components/BlueCurveSection';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wave"></div>
      <BlueCurveSection />      
      <NavigationBar />
      

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compatibility" element={<CompatibilityPage />} />
          <Route path="/devices" element={<DeviceDetails />} />
          <Route path="/device/:id" element={<DeviceDetails />} />
          <Route path="/settings" element={<SettingsPanel />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
