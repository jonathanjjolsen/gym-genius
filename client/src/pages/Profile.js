import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import DayCards from '../Components/DayCards';
import { FIND_USER } from '../utils/mutations';

// Interchangeable info
const initialPersonalInfo = {
    username: "Ash",
    age: "21",
    bio: "I like to workout",
    height: "5'10",
    weight: "150lbs",
    weightGoal: "100lbs"
};


// Interchangeable info
const WeekWorkout = [
    {
        WorkoutName: "Chest",
        Exercise: ["Bench", "Incline Bench", "Decline Bench"],
        Goal: ["Benching 200lbs", "Incline 150lbs", "Decline 150lbs"]
    },
    {
        WorkoutName: "Cardio",
        Exercise: ["Running", "Biking", "Swimming"],
        Goal: ["Running 200lbs", "Biking 150lbs", "Swimming 150lbs"]
    },
    {
        WorkoutName: "Arms",
        Exercise: ["Bicep Curls", "Tricep Extensions", "Hammer Curls"],
        Goal: ["Bicep Curls 200lbs", "Tricep Extensions 150lbs", "Hammer Curls 150lbs"]
    },
    {
        WorkoutName: "Abs",
        Exercise: ["Crunches", "Situps", "Planks"],
        Goal: ["Crunches 200lbs", "Situps 150lbs", "Planks 150lbs"]
    },
    {
        WorkoutName: "",
        Exercise: [],
        Goal: []
    },
    {
        WorkoutName: "Legs",
        Exercise: ["Squats", "Lunges",],
        Goal: ["Squats 200lbs", "Lunges 150lbs",]
    },
    {
        WorkoutName: "Back",
        Exercise: ["Deadlifts", "Pullups", "Rows"],
        Goal: ["Deadlifts 200lbs", "Pullups 150lbs", "Rows 150lbs"]
    }
];




const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// WeekWorkout Interchangeable 
const Week = WeekWorkout.map((Workout, i) => {
    return {
        Day: WeekDays[i],
        WorkoutName: Workout.WorkoutName,
        Exercise: Workout.Exercise,
        Goal: Workout.Goal
    }
});

console.log(Week);





function Profile() {
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [week, setWeek] = useState(Week);

    return (
        <div id="ProfilePage" className="card">
            <div>
                <div id="ProfileTop">
                    <div>
                        <img src="https://via.placeholder.com/150" alt="profile" />
                    </div>
                    <a href="#">Change Avatar</a>
                    <p>{personalInfo.username}</p>
                    <p>{personalInfo.age}</p>
                    <p>{personalInfo.bio}</p>
                    <p>{personalInfo.height}</p>
                    <p>{personalInfo.weight}</p>
                    <div id="ProfileWeightGoal">
                        <button type="button" className="btn"> - </button>
                        <h2>{personalInfo.weightGoal}</h2>
                        <button type="button" className="btn"> + </button>
                    </div>
                </div>
            </div>
            {
                week.map((day, i) => {
                    return <DayCards key={i} day={day} />

                })
            }
            <div />
        </div>
    );
}

export default Profile;