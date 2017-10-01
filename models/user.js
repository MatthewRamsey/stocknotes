const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export User for use in app
const User = module.exports = mongoose.model('User', UserSchema);

// Get User By Id
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

// Get User By Username
module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

// Add User
module.exports.addUser = function(newUser, callback) {
    // Generate salt
    bcrypt.genSalt(10, (err, salt) => {
        // Hash password
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            // Save hashed password
            newUser.password = hash;
            newUser.save(callback());
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}