// Import Libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const signup = require('./routes/signup');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');

const app = express();
const PORT = 5000;

// Use Route
app.use('/signup', signup);
app.use('/login', login);
app.use('/dashboard', dashboard);

app.use(cors());
app.use(
    express.static('/Users/siddharth/Code/javascript/loginapp/client/build')
);

// Connect to DB
mongoose.connect('mongodb://localhost/loginapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// API route
app.get('/', (req, res) => {
    console.log('IT WORKS');
    res.sendFile('/Users/siddharth/Code/javascript/loginapp/client/build');
});

// Make web server listen on PORT 500
app.listen(PORT);
