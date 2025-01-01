// src/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// ThemeProvider component to provide theme state and toggle function
export const ThemeProvider = ({ children }) => {
  // Get the stored theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage for persistence
  };

  useEffect(() => {
    // Apply the theme class to the <body> element to change background and text color
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return React.useContext(ThemeContext);
};
