const mongoose = require('mongoose');
// Test connnection string by IP Address instead of localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gym-genius');

module.exports = mongoose.connection;