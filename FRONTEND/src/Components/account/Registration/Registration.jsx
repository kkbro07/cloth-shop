import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, email, password } = formData;

    if (!firstName.trim()) {
      errors.firstName = 'First name is required.';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email format.';
    }

    if (!password.trim()) {
      errors.password = 'Password is required.';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter.';
    } else if (!/[a-z]/.test(password)) {
      errors.password = 'Password must contain at least one lowercase letter.';
    } else if (!/[0-9]/.test(password)) {
      errors.password = 'Password must contain at least one number.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      setSuccess('Registration successful! Please login with your credentials.');
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'There was an error registering the user!');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <div className="reg-container" ref={formRef}>
        <div className="page-header animate">
          <div className="page-header__text-wrapper text-container">
            <h1 className="heading h2">Register</h1>
            <p>Please fill in the fields below:</p>
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
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="input__field"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                  <label htmlFor="firstName" className="input__label">First name</label>
                  {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                </div>
                <div className="input animate">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="input__field"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                  <label htmlFor="lastName" className="input__label">Last name</label>
                  {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                </div>
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
                  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
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
                    autoComplete="new-password"
                  />
                  <label htmlFor="password" className="input__label">Password</label>
                  <button
                    type="button"
                    className="input__field-link link text--xsmall text--subdued toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  {formErrors.password && <div className="error-message">{formErrors.password}</div>}
                </div>
                <button type="submit" className="form__submit button button--primary button--full animate">
                  <span className="loader-button__text">Register</span>
                </button>
                <span className="form__secondary-action text--subdued animate">
                  Already have an account?{' '}
                  <a href="/login" className="link">
                    Login
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
