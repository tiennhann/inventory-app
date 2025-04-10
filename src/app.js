require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const productRoutes = require('./routes/productRoutes');
const manufacturerRoutes = require('./routes/manufacturerRoutes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// API routes
app.use('/api', productRoutes);
app.use('/api', manufacturerRoutes);

// Render routes
app.get('/upload', (req, res) => {
  res.render('upload');
});

app.get('/upload-manufacturer', (req, res) => {
  res.render('upload-manufacturer');
});

app.get('/list', (req, res) => {
  res.render('list');
});

app.get('/list-manufacturers', (req, res) => {
  res.render('list-manufacturers');
});

app.get('/query', (req, res) => {
  res.render('query');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 