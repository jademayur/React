// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Include CSS styling

const RegistrationForm = () => {
  // State to manage form input and error messages
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Regular expressions for validating email and password
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    let isValid = true;
    let newErrors = { username: '', email: '', password: '' };

    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters, include an uppercase letter, a number, and a special character';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // On successful validation, navigate to the "user data" page
      navigate('/user-data', { state: formData });
    }
  };

  return (
    <div className="registration-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
