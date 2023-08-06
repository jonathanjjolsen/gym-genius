const db = require('../config/connection');
const { Category, User} = require('../models');
const WorkoutSeeds = require('./WorkoutSeeds.json');
const UserSeeds = require('./UserSeeds.json');
db.once('open', async () => {
  try {
    await Category.deleteMany({});
    await Category.create(WorkoutSeeds);
    // Deletes and replaces Workouts in the database
    await User.deleteMany({});
    await User.create(UserSeeds);
    // Deletes and replaces Users in the database

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
