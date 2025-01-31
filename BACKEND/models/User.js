const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String }, // To store reset password token
  resetTokenExpiration: { type: Date }, // To store reset token expiration time
  otp: { type: String }, // OTP for password reset
  otpExpiresAt: { type: Date }, // OTP expiration time
  cart: { type: Array, default: [] }, // To store user's cart
});

// Method to compare plain password with hashed password in database
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Method to generate password reset token and expiration
userSchema.methods.generateResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
  this.resetToken = resetToken;
  this.resetTokenExpiration = resetTokenExpiration;
  return resetToken;
};

module.exports = mongoose.model('User', userSchema);
