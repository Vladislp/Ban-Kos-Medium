/* For the mongoose schema i used one of my old databases in mongodb */

const mongoose = require('mongoose');

// Define the schema for user documents
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  hobbies: [String]
});

// Create and export the model
module.exports = mongoose.model('People', userSchema, 'EstoniaMedVibes');
