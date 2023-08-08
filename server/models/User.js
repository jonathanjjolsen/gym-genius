const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Workout = require('./Workout');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: false,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        age: {
            type: Number,
            required: false,
            min: 0,
            max: 100
        },
        bio: {
            type: String,
            required: false,
            maxlength: 280
        },
        height: {
            type: String,
            required: false,
        },
        weight: {
            type: Number,
            required: false,
            min: 0,
            max: 500
        },
        weightGoal: {
            type: Number,
            required: false,
            min: 0,
            max: 500
        },
        Goals: {
            type: String,
            required: false,
        },
        workouts: {
            type: [Schema.Types.ObjectId],
            ref: 'Workout',
            default: []
        }
    },
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;