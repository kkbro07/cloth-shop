// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['male', 'female'], required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);
