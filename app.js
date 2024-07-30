const express = require('express');
const mongoose = require('./config/db');
const app = express();
const usersRouter = require('./routes/route');

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

//Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});