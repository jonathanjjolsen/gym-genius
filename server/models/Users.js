const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
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
        exercises: [{
            type: Schema.Types.ObjectId,
            ref: 'Exercises'
        }],
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

UsersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

UsersSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Users = model('Users', UsersSchema);

module.exports = Users;