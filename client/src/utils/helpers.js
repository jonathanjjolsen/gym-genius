function calculateDailyCalorieDeficit(height, currentWeight, goalWeight, age, gender) {
    const genderFactor = gender === 'male' ? 5 : -161;
  
    const weightInKg = currentWeight * 0.453592;
    const heightInCm = height * 2.54;
  
    const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + genderFactor;
  
    const calorieDeficitPerDay = currentWeight - goalWeight;
    const dailyCalorieDeficit = bmr - (calorieDeficitPerDay * 7700) / 365;
  
    return dailyCalorieDeficit;
  }
  
  function calculateDailyCalorieMaintenance(height, currentWeight, age, gender) {
    const genderFactor = gender === 'male' ? 5 : -161;
  
    const weightInKg = currentWeight * 0.453592;
    const heightInCm = height * 2.54;
  
    const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + genderFactor;
  
    // Harris-Benedict equation for calculating daily calorie maintenance
    const calorieMaintenance = bmr * 1.55; // Adjust activity level factor as needed
  
    return calorieMaintenance;
  }
  
  export { calculateDailyCalorieDeficit, calculateDailyCalorieMaintenance };