// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Home;
