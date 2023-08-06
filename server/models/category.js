const mongoose = require('mongoose');
const {Schema} = mongoose;
const exerciseSchema = require('./Exercise');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    exercises: [exerciseSchema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;