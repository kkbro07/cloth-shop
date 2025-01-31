import React, { useState } from 'react';
import './AdminDashboard.css';
import ProductCard from './ProductCard';
import Modal from './Modal';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="sidebar-logo">Admin</div>
        <ul className="sidebar-menu">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Orders</a></li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-actions">
            <button className="btn-primary" onClick={handleOpenModal}>Add Product</button>
          </div>
        </div>

        <div className="product-section">
          {/* Product Cards (For simplicity, using static data) */}
          <ProductCard title="Product 1" price="$100" />
          <ProductCard title="Product 2" price="$150" />
          <ProductCard title="Product 3" price="$200" />
        </div>

        {/* Modal for adding/editing product */}
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
