// NotFound.jsx
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found" data-aos="fade-up">
      <h1 data-aos="zoom-in" data-aos-delay="100">404</h1>
      <p data-aos="fade-in" data-aos-delay="200">Oops! The page you're looking for does not exist.</p>
      <p data-aos="fade-in" data-aos-delay="300">It might have been removed or is temporarily unavailable.</p>
      <a href="/" className="not-found-link" data-aos="fade-up" data-aos-delay="400">Back to Home</a>
    </div>
  );
};

export default NotFound;
