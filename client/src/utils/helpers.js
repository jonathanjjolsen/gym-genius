function calculateDailyCalorieDeficit(height, currentWeight, goalWeight, age) {
    const isMale = true; 
    const genderFactor = isMale ? 5 : -161;

    const weightInKg = currentWeight * 0.453592;
    const heightInCm = height * 2.54; 

    const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + genderFactor;


    const calorieDeficitPerDay = currentWeight - goalWeight;
    const dailyCalorieDeficit = bmr - (calorieDeficitPerDay * 7700) / 365;
    
    return dailyCalorieDeficit;
}

export default calculateDailyCalorieDeficit;
