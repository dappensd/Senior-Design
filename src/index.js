import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth-context';
import { DeviceProvider } from './DeviceContext';
import { LayoutProvider } from './layoutcontext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <AuthProvider>
        <DeviceProvider>
          <LayoutProvider>
            <App />
          </LayoutProvider>
        </DeviceProvider>
      </AuthProvider> 
     </BrowserRouter>  
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

