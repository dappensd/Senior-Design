// LayoutContext.js
import React, { createContext, useState, useEffect } from 'react';

export const LayoutContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {}
});

export const LayoutProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('Sidebar state before toggle:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log('Sidebar state after toggle:', isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};