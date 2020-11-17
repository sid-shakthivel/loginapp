// Import Libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Issuer } = require('openid-client');

// Import Routes
const signup = require('./routes/signup');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');

const { dbusername, dbpassword, secret, id, redirect_url  } = require('./env');

const app = express();
const PORT = 8080;

// Use Route
app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/dashboard', dashboard);

app.use(cors());

// Connect to DB
mongoose.connect(`mongodb://${dbusername}:${dbpassword}@localhost:127.0.0.1/loginapp`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// API route
app.get('/api', (req, res) => {
   res.status(200).json({ message: `${redirect_url}` });
});

// Make web server listen on PORT 8080
app.listen(PORT);
