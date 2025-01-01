// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import UserData from './components/UserData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/user-data" element={<UserData />} />
      </Routes>
    </Router>
  );
};

export default App;
