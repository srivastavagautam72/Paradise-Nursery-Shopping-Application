import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        
        {/* ✅ Exact required company name */}
        <h1 className="landing-title">
          Welcome to Paradise Nursery
        </h1>

        <p className="landing-subtitle">
          Discover the perfect plants to transform your space into a green paradise.
          We offer a wide variety of houseplants, succulents, and flowering plants
          to bring natural beauty into your home.
        </p>

        {/* ✅ Required Get Started button */}
        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

      </div>
    </div>
  );
};

export default App;
