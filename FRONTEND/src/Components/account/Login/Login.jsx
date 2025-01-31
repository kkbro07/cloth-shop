import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('auth-token');
    if (token) {
      // If the token exists, navigate to the appropriate page
      navigate('/profile'); // Or redirect to any page you like
    }

    const elements = formRef.current.querySelectorAll('.animate');
    gsap.fromTo(
      elements,
      {
        x: () => `${Math.random() * 200 - 100}px`,
        y: () => `${Math.random() * 200 - 100}px`,
        opacity: 0,
      },
      { x: 0, y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const { data } = await axios.post('http://localhost:5000/auth/login', formData);
      setSuccess('Login successful!');
      localStorage.setItem('auth-token', data.token);

      // Redirect based on whether the user is an admin
      if (data.isAdmin) {
        navigate('/admin-dashboard'); // Redirect to the admin dashboard
      } else {
        navigate('/'); // Redirect to the user homepage
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Invalid email or password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <div className="login-container" ref={formRef}>
        <div className="page-header animate">
          <div className="page-header__text-wrapper text-container">
            <h1 className="heading h2">Login</h1>
            <p>Enter your credentials below:</p>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="page-content page-content--small">
          <div className="account__block-list">
            <div className="account__block-item">
              <form onSubmit={handleSubmit} className="form">
                <div className="input animate">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input__field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                  <label htmlFor="email" className="input__label">E-mail</label>
                </div>
                <div className="input animate">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="input__field"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                  />
                  <label htmlFor="password" className="input__label">Password</label>
                  <button
                    type="button"
                    className="input__field-link link text--xsmall text--subdued toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <button type="submit" className="form__submit button button--primary button--full animate">
                  <span className="loader-button__text">Login</span>
                </button>
                <span className="form__secondary-action text--subdued animate">
                  Don't have an account?{' '}
                  <a href="/register" className="link">
                    Register
                  </a>
                </span>
              </form>
              {/* Forgot Password link */}
              <div className="forgot-password animate">
                <a href="/forgot-password" className="link">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
