const db = require('../config/connection');
const { Category, User, Exercise, Workout } = require('../models');
const exerciseData = require('./WorkoutSeeds.json');
const categoryData = require('./CategorySeed.json')
const UserSeeds = require('./UserSeeds.json');
db.once('open', async () => {
  try {
    await Category.deleteMany({});
    // await Category.deleteMany(categoryData)
    
    await Exercise.deleteMany({});

    await User.deleteMany({});

    await Workout.deleteMany({});


    const insertedCategories = await Category.insertMany(categoryData);
    
    exerciseData.forEach((exercise) => {
      const category = insertedCategories.find((category) => category.CategoryName === exercise.category);
      exercise.category = category ? category._id : null;

      console.log(exerciseData);
    })
    await Exercise.insertMany(exerciseData);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
