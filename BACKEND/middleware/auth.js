// BACKEND/middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    // Store user ID from the decoded token for later use
    req.userId = decoded.id;
    next(); // Call the next middleware
  });
};

module.exports = auth;
