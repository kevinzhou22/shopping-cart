import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home-page.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Essential COVID-19 Supplies</h2>
      <Link to="/supplies">Get Your Supplies</Link>
    </div>
  );
}

export default HomePage;
