const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

// POST: Create a new manufacturer
router.post('/manufacturers', async (req, res) => {
  try {
    const manufacturer = new Manufacturer(req.body);
    await manufacturer.save();
    res.status(201).json(manufacturer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Get all manufacturers
router.get('/manufacturers', async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find({});
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Get a single manufacturer by ID
router.get('/manufacturers/:id', async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 