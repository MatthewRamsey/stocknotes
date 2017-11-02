const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to MongoDB
mongoose.connect(config.database);

// Check for connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
}) ;

// Check for error
mongoose.connection.on('error', (err) => {
    console.log('database error ' + err);
});

// Initialize express server
const app = express();

// Define user route folder
const users =  require('./routes/users')

// Port number
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// CORS middleware
app.use(cors());

// Wire up static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());

// Passport middlware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Define user routes parent path
app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});