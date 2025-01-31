// authController.js (Backend)

const nodemailer = require('nodemailer');
const User = require('../models/User');
const crypto = require('crypto');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) return res.status(404).json({ message: 'User not found.' });

  const otp = crypto.randomInt(100000, 999999); // Generate OTP

  // Store OTP in the user's document (could also store it temporarily in a cache or session)
  user.otp = otp;
  user.otpExpiration = Date.now() + 15 * 60 * 1000; // OTP expires in 15 minutes
  await user.save();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent to your email!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP.' });
  }
};
