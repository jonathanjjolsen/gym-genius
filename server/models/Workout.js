const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    workoutName: {
        type: String,
        default: 'Untitled Workout',
        trim: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;