import React from 'react';
import './Footer.css'; // Import the CSS for styling
import { Link } from 'react-router-dom'; // Use Link for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* About Us Section */}
        <div className="footer__section">
          <h3>About Us</h3>
          <p>
            Overlays Clothing P Ltd<br />
            Explore to CHANGE. <Link to="/AboutUs">Learn More</Link>
          </p>
        </div>

        {/* Policies Section */}
        <div className="footer__section">
          <h3>Policies</h3>
          <ul>
            <li><Link to="/return">Return Your Order</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/return-refund-cancellation">Return, Refund, and Cancellation</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li>Fraud Protection</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer__section footer__newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter to receive the latest offers and updates.</p>
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Your E-mail"
              className="footer__input"
            />
            <button type="submit" className="footer__button">Subscribe</button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="footer__section">
          <h3>Follow Us</h3>
          <div className="footer__social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" aria-label="Facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" aria-label="Twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" aria-label="Instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <p>© 2024 Overlays Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
