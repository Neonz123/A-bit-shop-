import React from 'react';
import './Hero.css'; // Import Hero specific CSS

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Add a wrapper for content to control its max-width and padding */}
      <div className="hero-content-wrapper">
        <div className="hero-content-left">
          <h1 className="hero-heading">
            FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
          </h1>
          <p className="hero-description">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="shop-now-button">
            Shop Now
          </button>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <p className="stat-number">200+</p>
              <p className="stat-label">International Brands</p>
            </div>
            <div className="hero-stat-item">
              <p className="stat-number">2,000+</p>
              <p className="stat-label">High-Quality Products</p>
            </div>
            <div className="hero-stat-item">
              <p className="stat-number">30,000+</p>
              <p className="stat-label">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="hero-image-right">
          <img
            src="https://placehold.co/600x600/ffffff/000000?text=Models"
            alt="Fashion Models"
            className="models-image"
          />
          <div className="decorative-star top-right"></div>
          <div className="decorative-star bottom-left"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;