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

router.post('/register', async (req, res) => {
    const {name, email, password, age, hobbies} = req.body;

    try {
        let user = await User.findOne({email})
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }

        user = new User({
            name,
            email,
            password,
        });

        await user.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;

