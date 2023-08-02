const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercises'
    }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;