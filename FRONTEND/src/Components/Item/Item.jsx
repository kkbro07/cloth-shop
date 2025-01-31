// FRONTEND\src\Components\Item\Item.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'; // Assuming there's a CSS file

const Item = ({ id, name, image, new_price, old_price }) => {
  const navigate = useNavigate(); // Hook to navigate

  const handleClick = () => {
    navigate(`/product/${id}`); // Navigate to the product detail page with the product ID
  };

  return (
    <div className="item" onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Old Price: ₹{old_price}</p>
      <p>New Price: ₹{new_price}</p>
    </div>
  );
};

export default Item;
