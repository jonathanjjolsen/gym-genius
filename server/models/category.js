const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    WorkoutName: {
        type: String,
        required: true,
        trim: true
    },
    excercises: [
        {
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

            }
        }
    ]

});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;