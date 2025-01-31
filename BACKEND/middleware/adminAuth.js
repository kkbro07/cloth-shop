// backend/middleware/adminAuth.js
const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(403).send('Access denied.');

  try {
    const decoded = jwt.verify(token, ''); // Use a strong secret key
    if (decoded.role !== 'admin') {
      return res.status(403).send('Access denied.');
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

module.exports = adminAuth;
