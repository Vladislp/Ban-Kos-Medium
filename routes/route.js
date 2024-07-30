const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user-model');
const jwt = require('jsonwebtoken');

// Get all users (for testing purposes)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Register new user
router.post('/register', async (req, res) => {
    const { name, email, password, age, hobbies } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User({
            name,
            email,
            password,
            age,
            hobbies
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const SECRET_KEY = 'your_secret_key'; // Store this securely, not in your code

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log(`Login attempt with email: ${email}`);

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found with email:', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('User found:', user);

    // Compare the password directly (no hashing)
    if (password !== user.password) {
      console.log('Password does not match for user:', user.email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('Password matches for user:', user.email);

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });

    // If login is successful, return the token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
  
  module.exports = router;
