import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import SettingsPanel from './components/SettingsPanel';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

