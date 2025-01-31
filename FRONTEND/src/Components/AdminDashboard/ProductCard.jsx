import React from 'react';
import './AdminDashboard.css';

const ProductCard = ({ title, price }) => {
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/150" alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-price">{price}</div>
    </div>
  );
};

export default ProductCard;
