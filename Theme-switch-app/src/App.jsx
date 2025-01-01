// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="container">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
