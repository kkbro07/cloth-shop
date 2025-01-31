const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendResetEmail = require('../utils/sendResetEmail'); // Utility function for sending emails

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully. You can now log in.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if user is admin (for example, based on email or role)
    const isAdmin = email === '21bmiit110@gmail.com'; // or user.role === 'admin'

    const token = jwt.sign({ id: user._id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token, cart: user.cart, isAdmin });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Forgot Password Route (request OTP)
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
    await user.save();

    const resetLink = `http://localhost:3000/reset-password?token=${jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })}`;
    const message = `Your OTP is: ${otp}. \nClick here to reset your password: ${resetLink}`;

    await sendResetEmail(user.email, message); // Use email sending utility function

    res.status(200).json({ message: 'OTP sent to your email!' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Reset Password Route (validate OTP and reset password)
router.post('/reset-password', async (req, res) => {
  const { token, otp, newPassword } = req.body;

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if OTP is expired
    if (Date.now() > user.otpExpiresAt) {
      return res.status(400).json({ message: 'OTP has expired. Please request a new one.' });
    }

    // Validate OTP
    if (otp !== user.otp) {
      return res.status(400).json({ message: 'Invalid OTP. Please try again.' });
    }

    // Hash and set new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // Clear OTP and expiration
    user.otp = undefined;
    user.otpExpiresAt = undefined;

    await user.save();
    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Resend OTP Route (for expired OTP)
router.post('/resend-otp', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
    await user.save();

    const resetLink = `http://localhost:3000/reset-password?token=${jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })}`;
    const message = `Your new OTP is: ${otp}. \nClick here to reset your password: ${resetLink}`;

    await sendResetEmail(user.email, message); // Use email sending utility function

    res.status(200).json({ message: 'New OTP sent to your email!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


module.exports = router;




