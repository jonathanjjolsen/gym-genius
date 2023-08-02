const { User, Exercise, Category, Workout } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        categories: async () => {
            return await Categories.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'workouts.exercises',
                populate: 'category',
              });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        exercises: async (parent, { category, name }) => {
            const params = {};
            if (category) {
                params.category = category;
            }
            if (name) {
                params.name = {
                    $regex: name
                };
            }
            return await Exercise.find(params).populate('category');
        },
        exercise: async (parent, { _id }) => {
            return await Exercise.findById(_id).populate('category');
        },
        workout: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'workouts.exercises',
                populate: 'category',
              });
      
              return user.workouts.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addExercise: async (parent, args) => {
            const exercise = await Exercise.create(args);
            
            return exercise;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
    }
};

module.exports = resolvers;

module.exports = resolvers;