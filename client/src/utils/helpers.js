function calculateCalorieDeficit(currentWeight, goalWeight) {
 
    const bmr = 10 * currentWeight + 6.25 * goalWeight - 5 * age + 5;
  

    const dailyCalorieDeficit = bmr - 500; 
  
    return dailyCalorieDeficit;
  }
  

  const currentWeight = 180; 
  const goalWeight = 160; 
  const age = 30; 
  
  const calorieDeficit = calculateCalorieDeficit(currentWeight, goalWeight);
  
  console.log(`Daily Calorie Deficit: ${calorieDeficit} calories`);

  export default calculateCalorieDeficit;