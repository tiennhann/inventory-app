const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST: Create a new product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({}).populate('manufacturer');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Query products
router.get('/products/query', async (req, res) => {
  try {
    const { priceBelow, sortBy, order } = req.query;
    let query = {};
    
    if (priceBelow) {
      query.price = { $lt: parseFloat(priceBelow) };
    }
    
    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'desc' ? -1 : 1;
    }
    
    const products = await Product.find(query).sort(sortOptions).populate('manufacturer');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 