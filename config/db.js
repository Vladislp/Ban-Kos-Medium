/*
    https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
    https://www.mongodb.com/docs/drivers/node/v4.1/fundamentals/crud/read-operations/retrieve/
*/

const mongoose = require('mongoose');
let {MongoClient} = require('mongodb');
require('dotenv').config();

const dbURL = process.env.MONGODB_URI;
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose;
