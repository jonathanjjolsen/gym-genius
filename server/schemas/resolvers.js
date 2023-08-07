const { User, Exercise, Category, Workout } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    // finds all categories
    Query: {
        categories: async () => {
            return await Category.find();
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

        userProfile: async () => {
            const info = await User.find()
            return info;
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
        workout: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'categories.exercises',
                    populate: 'workouts',
                });

                return user.workouts.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        updateUserProfile: async (_, { age, bio, height, weight, weightGoal }, context) => {
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
        createWorkout: async (parent, { email, workoutName }, context) => {
            console.log(context);
            //TODO: Uncomment this to only allow workouts to be created if user is logged in
            // if (context.user) {
            const workout = new Workout({ workoutName });
            console.log('the workout: ', workout)
            const theUser = await User.findOne({ email });
            theUser.workouts.push(workout);
            theUser.save()
            workout.save()

            return workout;
            // }

            throw new AuthenticationError('Not logged in');
        },
        // addExerciseToWorkout: async (parent, { workoutName, exerciseInput }, context) => {
        //     const workout = await Workout.findOne({ workoutName })
        //     if (!workout) {
        //         throw new Error('Workout not found');
        //     }
        //     // Create a new exercise from the exerciseInput argument
        //     const newExercise = new Exercise({
        //         ...exerciseInput,
        //     });

        //     workout.exercises.push(newExercise);
        //     workout.save()
        //     newExercise.save()

        //     // 4. Return the updated workout with the new exercise
        //     return workout;
        // }
    }
};

module.exports = resolvers;