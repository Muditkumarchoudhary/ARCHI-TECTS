const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // User model
const Order = require('./models/Order'); // Order model
const Cart = require('./models/Cart'); // Cart model
const Product = require('./models/Product'); // Product model
const Architect = require('./models/Architect'); // Architect model

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your_jwt_secret'; // Replace with a strong secret key in production

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myNewDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Signup Route
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, userId, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, phoneNumber, email, userId, password: hashedPassword });
    await newUser.save();
    res.status(200).send({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error); // Log the error
    res.status(500).send({ success: false, message: 'Error registering user', error });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { userId, password } = req.body;

  try {
    // Find user by userId
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).send({ success: false, message: 'Invalid User ID or Password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ success: false, message: 'Invalid User ID or Password' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error); // Log the error
    res.status(500).send({
      success: false,
      message: 'An error occurred during login',
      error: error.message || 'Internal server error',
    });
  }
});

// Protected Route Example
app.get('/api/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header

  if (!token) {
    return res.status(401).send({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
    res.status(200).send({
      success: true,
      message: 'You have access to this protected route.',
      data: decoded, // Contains userId and email from token
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).send({ success: false, message: 'Invalid or expired token' });
  }
});

// Get User Details Route
app.get('/api/user-details', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header

  if (!token) {
    return res.status(401).send({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
    const user = await User.findOne({ userId: decoded.userId });
    const orders = await Order.find({ userId: decoded.userId });
    const cart = await Cart.findOne({ userId: decoded.userId }).populate('products');
    const architects = await Architect.find({ userId: decoded.userId });

    res.status(200).send({
      success: true,
      user,
      orders,
      cart,
      architects,
    });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).send({ success: false, message: 'Error fetching user details', error });
  }
});

// Add to Cart Route
app.post('/api/add-to-cart', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header

  if (!token) {
    return res.status(401).send({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId: decoded.userId });
    if (!cart) {
      cart = new Cart({ userId: decoded.userId, products: [] });
    }

    cart.products.push(productId);
    await cart.save();

    res.status(200).send({ success: true, message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).send({ success: false, message: 'Error adding product to cart', error });
  }
});

// Place Order Route
app.post('/api/place-order', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header

  if (!token) {
    return res.status(401).send({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
    const cart = await Cart.findOne({ userId: decoded.userId }).populate('products');

    if (!cart || cart.products.length === 0) {
      return res.status(400).send({ success: false, message: 'Cart is empty' });
    }

    const totalAmount = cart.products.reduce((total, product) => total + product.price, 0);
    const newOrder = new Order({
      userId: decoded.userId,
      products: cart.products,
      totalAmount,
      status: 'Pending',
    });

    await newOrder.save();
    cart.products = [];
    await cart.save();

    res.status(200).send({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).send({ success: false, message: 'Error placing order', error });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
