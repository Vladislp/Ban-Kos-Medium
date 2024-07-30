/* For the mongoose schema i used one of my old databases in mongodb */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for user documents
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  hobbies: [String],
  password: {
    type: String,
    required: true,
  }
});

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    // Skip hashing, if nothing modified
    return next(); 
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Create and export the model
module.exports = mongoose.model('People', userSchema, 'EstoniaMedVibes');
