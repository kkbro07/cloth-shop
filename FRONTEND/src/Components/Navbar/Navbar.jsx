// FRONTEND/src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import ProfileIcon from '../Assets/profile.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems, resetCart } = useContext(ShopContext);

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('auth-token');

  // Update menu state based on the current location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setMenu('Home');
    else if (path === '/shop') setMenu('Shop');
    else if (path === '/men') setMenu('Men');
    else if (path === '/women') setMenu('Women');
    else if (path === '/contact') setMenu('Contact');
    else if (/^\/aboutus$/.test(path)) setMenu('About Us');
    else if (/^\/return/.test(path)) setMenu('Return');
    else if (/^\/shipping$/.test(path)) setMenu('Shipping');
    else if (/^\/terms$/.test(path)) setMenu('Terms');
    else if (path.startsWith('/profile') || path.startsWith('/product')) setMenu('');
  }, [location]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isProfileOrProductPage = location.pathname.startsWith('/profile') || location.pathname.startsWith('/product');

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    resetCart(); // Clear the cart upon logout
    window.location.replace('/'); // Redirect to home page
  };

  return (
    <div className={`navbar ${isProfileOrProductPage ? 'no-underline' : ''}`}>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>OVERLAYS</p>
      </div>
      <div className='nav-menu-toggle' onClick={handleMenuToggle}>
        ☰
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => setMenu('Home')}>
          <Link to='/' className={menu === 'Home' && !isProfileOrProductPage ? 'active-link' : ''}>Home</Link>
          {menu === 'Home' && !isProfileOrProductPage && <hr />}
        </li>
        <li onClick={() => setMenu('Shop')}>
          <Link to='/shop' className={menu === 'Shop' && !isProfileOrProductPage ? 'active-link' : ''}>Shop All</Link>
          {menu === 'Shop' && !isProfileOrProductPage && <hr />}
        </li>
        <li onClick={() => setMenu('Men')}>
          <Link to='/men' className={menu === 'Men' && !isProfileOrProductPage ? 'active-link' : ''}>Men</Link>
          {menu === 'Men' && !isProfileOrProductPage && <hr />}
        </li>
        <li onClick={() => setMenu('Women')}>
          <Link to='/women' className={menu === 'Women' && !isProfileOrProductPage ? 'active-link' : ''}>Women</Link>
          {menu === 'Women' && !isProfileOrProductPage && <hr />}
        </li>
        <li onClick={() => setMenu('Contact')}>
          <Link to='/contact' className={menu === 'Contact' && !isProfileOrProductPage ? 'active-link' : ''}>Contact Us</Link>
          {menu === 'Contact' && !isProfileOrProductPage && <hr />}
        </li>
        <li onClick={() => setMenu('About Us')}>
          <Link to='/aboutus' className={menu === 'About Us' && !isProfileOrProductPage ? 'active-link' : ''}>About Us</Link>
          {menu === 'About Us' && !isProfileOrProductPage && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <>
            <Link to="/profile">
              <img src={ProfileIcon} alt="Profile" className="profile-icon" />
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
