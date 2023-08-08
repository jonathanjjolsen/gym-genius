const { User, Exercise, Category, Workout } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    // finds all categories
    Query: {
        exercises: async () => {
            try {
              const exercises = await Exercise.find().populate('category');
              return exercises;
            } catch (error) {
              throw new Error(error);
            }
          },
        // categories: async () => {
        //     return await Categories.find();
        // },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        

        // exercises: async (parent, { category, name }) => {
        //     const params = {};
        //     if (category) {
        //         params.category = category;
        //     }
        //     if (name) {
        //         params.name = {
        //             $regex: name
        //         };
        //     }
        //     return await Exercise.find(params).populate('category');
        // },
        // exercise: async (parent, { _id }) => {
        //     return await Exercise.findById(_id).populate('category');
        // },
        // workout: async (parent, { _id }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user._id).populate({
        //             path: 'categories.exercises',
        //             populate: 'workouts',
        //         });

        //         return user.workouts.id(_id);
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },
    },
    // Category: {
    //     exercises: async (parent) => {
    //         try {
    //             return parent.exercises;
    //         } catch(error) {
    //             console.error('Error fetching', error);
    //             throw new Error('Failed to fetch');
    //         }
    //     }
    // },
    Mutation: {
        updateUserProfile: async (_, { age, bio, height, weight, weightGoal, Goals}, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not authenticated');
            }
            
            const userId = context.user._id;

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        age,
                        bio,
                        height,
                        weight,
                        weightGoal,
                        Goals,
                    },
                },
                { new: true }
            );
            
            return updatedUser;
        },

        //addUser mutation to connect with front end
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user, redirectURL: '/Profile' };
        },
        createWorkout: async (_, { selectedExercises }, context) => {
            try {
                const workout = new Workout({ exercises: selectedExercises });

                await workout.save();

                const userId = context.user._id;

                await User.findByIdAndUpdate(userId, { $push: { workouts: workout._id } });

                return workout;
            }
            catch (err) {
                console.error(err);
                throw new Error('Failed to create workout');
            }
        },
        
    }
};

module.exports = resolvers;