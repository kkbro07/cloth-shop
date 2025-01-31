import React, { useState } from 'react';
import './AdminDashboard.css';

const Modal = ({ onClose }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: 'Male',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data Submitted:', productData);
    onClose(); // Close modal after submit
  };

  return (
    <div className="modal show">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Save Product</button>
        </form>
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
