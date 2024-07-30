const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.get('/', async (req, res) => {
    try {
        // Query the database for all users
        const users = await User.find();
        // Send the users data as a JSON response
        res.json(users);
    } catch (error) {
        // Send error message if something goes wrong
        res.status(400).json({message: error.message});
    }
});

module.exports = router;