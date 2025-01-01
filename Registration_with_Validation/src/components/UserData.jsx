// src/components/UserData.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserData.css'; // Include styling

const UserData = () => {
  const location = useLocation();
  const { username, email, password } = location.state || {};

  return (
    <div className="user-data-container">
      <h2>User Data</h2>
      {username && email && password ? (
        <div className="user-data">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserData;
