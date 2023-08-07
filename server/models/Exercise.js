const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mainMuscles: {
        type: String,
        allowNull: true,
        trim: true
    },
    minorMuscles: {
        type: String,
        allowNull: true,
        trim: true
    },
    equipment: {
        type: String,
        allowNull: true,
        trim: true
    },
    difficulty: {
        type: String,
        allowNull: true,
        trim: true
    },
    instructions: {
        type: String,
        allowNull: true,
        trim: true
    },
    url: {
        type: String,
        allowNull: true,
        trim: true

    },
    category: {
        type: String,
        ref: 'Category',
        required: true,
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;