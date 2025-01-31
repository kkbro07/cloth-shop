// FRONTEND/src/Context/UserContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/auth/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const updateUserProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  const updateUserCart = (updatedCart) => {
    setUser((prevUser) => ({ ...prevUser, cart: updatedCart }));
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUserProfile, updateUserCart }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
