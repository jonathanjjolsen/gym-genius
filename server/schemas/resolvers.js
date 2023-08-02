const { Users, Exercises, Categories } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await Users.find({}).populate('savedWorkouts');
        },
        exercises: async () => {
            return await Exercises.find({});
        },

        categories: async () => {
            return await Categories.find({}).populate('exercises');
        },
    },
};

module.exports = resolvers;