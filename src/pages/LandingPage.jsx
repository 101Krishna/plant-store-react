import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GreenLeaf Store</h1>
          <p className="subtitle">Transform Your Space with Beautiful Houseplants</p>
          <p className="description">
            Discover our premium collection of indoor and outdoor plants. Each plant is carefully selected and nurtured to bring nature's beauty into your home.
          </p>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">🌳</div>
        </div>
      </div>
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <span className="feature-icon">🌱</span>
            <h3>Quality Plants</h3>
            <p>Healthy, vibrant plants sourced from trusted growers</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Quick and safe delivery to your doorstep</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💚</span>
            <h3>Expert Care Tips</h3>
            <p>Get personalized care instructions with every purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
