import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavigation('/')}>
          Paradise Nursery
        </div>
        <ul className="nav-links">
          <li>
            <span 
              className="nav-link" 
              onClick={() => handleNavigation('/')}
            >
              Home
            </span>
          </li>
          <li>
            <span 
              className="nav-link" 
              onClick={() => handleNavigation('/products')}
            >
              Plants
            </span>
          </li>
          <li>
            <span 
              className="nav-link" 
              onClick={() => handleNavigation('/about')}
            >
              About Us
            </span>
          </li>
          <li>
            <span 
              className="nav-link" 
              onClick={() => handleNavigation('/cart')}
            >
              🛒 Cart
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Paradise Nursery</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h3>Welcome to Paradise Nursery</h3>
            <p>
              At Paradise Nursery, we are passionate about bringing the beauty of nature into your home. 
              Founded with a love for plants and a commitment to quality, we have been serving plant 
              enthusiasts and nature lovers for over a decade.
            </p>
          </div>

          <div className="about-section">
            <h3>Our Mission</h3>
            <p>
              Our mission is to make high-quality houseplants accessible to everyone, regardless of 
              their gardening experience. We believe that plants have the power to transform spaces, 
              improve air quality, and enhance overall well-being. We are dedicated to helping you 
              create your own green paradise at home.
            </p>
          </div>

          <div className="about-section">
            <h3>Quality Plants, Guaranteed</h3>
            <p>
              We take great pride in sourcing only the finest quality plants from reputable growers 
              around the world. Each plant in our collection is carefully selected for its health, 
              beauty, and suitability for indoor environments. Our expert horticulturists ensure 
              that every plant meets our strict quality standards before it reaches your home.
            </p>
          </div>

          <div className="about-section">
            <h3>Customer Satisfaction</h3>
            <p>
              Customer satisfaction is at the heart of everything we do. We provide detailed care 
              instructions with every purchase and offer ongoing support to help your plants thrive. 
              Our knowledgeable team is always ready to answer questions and provide guidance on 
              plant care, ensuring you have the best possible experience with your new green friends.
            </p>
          </div>

          <div className="about-section">
            <h3>Our Collection</h3>
            <p>
              We offer a diverse range of plants including:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li><strong>Indoor Plants:</strong> Low-maintenance plants perfect for brightening up any room</li>
              <li><strong>Succulents:</strong> Unique, architectural plants that require minimal care</li>
              <li><strong>Flowering Plants:</strong> Colorful blooms to add vibrancy to your space</li>
            </ul>
            <p>
              Whether you're a seasoned plant parent or just starting your green journey, we have 
              the perfect plant for every skill level and aesthetic preference.
            </p>
          </div>

          <div className="about-section">
            <h3>Why Choose Paradise Nursery?</h3>
            <p>
              • Expert plant care advice and support<br/>
              • Healthy, high-quality plants guaranteed<br/>
              • Competitive pricing and great value<br/>
              • Fast, secure shipping nationwide<br/>
              • 30-day satisfaction guarantee<br/>
              • Wide variety of plants for all preferences<br/>
              • Eco-friendly packaging and practices
            </p>
          </div>

          <div className="about-section">
            <h3>Get in Touch</h3>
            <p>
              Have questions about our plants or need care advice? We'd love to hear from you! 
              Contact our friendly team at info@paradisenursery.com or call us at (555) 123-PLANT. 
              Follow us on social media for plant care tips, new arrivals, and inspiration for 
              your green space.
            </p>
            <p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', color: '#4CAF50' }}>
              "Creating green spaces, one plant at a time."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
