import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });
  const [editing, setEditing] = useState({ firstName: false, lastName: false, email: false });
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const response = await axios.get('http://localhost:5000/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, []);
  
  
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsUpdating(true);

    try {
      const token = localStorage.getItem('auth-token');
      const response = await axios.put('http://localhost:5000/auth/update-profile', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(response.data.message);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.response?.data?.message || 'Failed to update profile. Please try again.');
    } finally {
      setIsUpdating(false);
      setEditing({ firstName: false, lastName: false, email: false });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('auth-token');
      const response = await axios.patch('http://localhost:5000/auth/change-password', { currentPassword, newPassword }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(response.data.message);
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.error('Error changing password:', err);
      setError(err.response?.data?.message || 'Failed to change password. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/login'); // Redirect to the login page
  };

  const toggleEdit = (field) => {
    setEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="input-group">
          <label>First Name:</label>
          <div className="display-container">
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              disabled={!editing.firstName || isUpdating}
              required
            />
            <button type="button" onClick={() => toggleEdit('firstName')} className="edit-icon" disabled={isUpdating}>
              ✏️
            </button>
          </div>
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <div className="display-container">
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              disabled={!editing.lastName || isUpdating}
              required
            />
            <button type="button" onClick={() => toggleEdit('lastName')} className="edit-icon" disabled={isUpdating}>
              ✏️
            </button>
          </div>
        </div>
        <div className="input-group">
          <label>Email:</label>
          <div className="display-container">
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              disabled={!editing.email || isUpdating}
              required
            />
            <button type="button" onClick={() => toggleEdit('email')} className="edit-icon" disabled={isUpdating}>
              ✏️
            </button>
          </div>
        </div>
        <button type="submit" disabled={isUpdating}>Update Profile</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </form>

      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="input-group">
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </form>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Profile;
