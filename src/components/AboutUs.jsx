
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="about-page">
      <h1>About Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery! We are dedicated to bringing the beauty 
        of nature into your home with our wide selection of high-quality plants.
      </p>

      <p>
        Our mission is to provide healthy indoor plants, succulents, and 
        flowering plants at affordable prices while helping our customers 
        create beautiful green spaces.
      </p>

      <p>
        We carefully source our plants from trusted growers and ensure that 
        every plant meets our quality standards before delivery.
      </p>

      <p>
        At Paradise Nursery, customer satisfaction is our top priority. 
        Whether you are a beginner or an experienced plant lover, 
        we are here to support your gardening journey.
      </p>

      <button onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
};

export default AboutUs;
