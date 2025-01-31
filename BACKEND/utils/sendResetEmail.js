// utils/sendResetEmail.js
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const sendResetEmail = async (email) => {
  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP and expiration time
    user.otp = otp;
    user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    await user.save();

    // Generate reset token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Dynamic frontend URL (use a config or environment variable)
    const resetURL = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
    const message = `Your OTP is: ${otp}. \nClick the following link to reset your password: ${resetURL}`;

    // Send reset email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      text: message,
    });

    return { message: 'Reset email sent successfully' };
  } catch (error) {
    console.error(`Error sending reset email: ${error.message}`);
    throw new Error(`Error sending reset email: ${error.message}`);
  }
};

module.exports = sendResetEmail;
