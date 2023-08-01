const mongoose = require('mongoose');

const { Schema } = mongoose;

const exercises = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        allowNull: true,
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
    }
});

const Exercises = mongoose.model('Exercises', exercises);

module.exports = Exercises;