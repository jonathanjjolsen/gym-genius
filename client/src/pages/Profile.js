import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
import DayCards from '../Components/DayCards';
import ProfileInfoModal from '../Components/ProfileInfoModal';
import calculateCalorieDeficit from '../utils/helpers';

const initialPersonalInfo = {
    username: "Ash",
    age: "21",
    bio: "I like to workout",
    height: "5'10",
    weight: "150",
    weightGoal: "100lbs"
};

const WeekWorkout = [
    {
        WorkoutName: "Chest",
        Exercise: ["Bench", "Incline Bench", "Decline Bench"],
        Goal: ["Benching 200lbs", "Incline 150lbs", "Decline 150lbs"]
    },
    {
        WorkoutName: "Cardio",
        Exercise: ["Running", "Biking", "Swimming", "Rowing", "Jump Rope", "Stairmaster", "Elliptical"],
        Goal: []
    },
    {
        WorkoutName: "Arms",
        Exercise: ["Bicep Curls", "Tricep Extensions", "Hammer Curls"],
        Goal: ["Bicep Curls 200lbs", "Tricep Extensions 150lbs", "Hammer Curls 150lbs", "Bicep Curls 200lbs", "Tricep Extensions 150lbs", "Hammer Curls 150lbs"]
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
        Exercise: ["Squats", "Lunges"],
        Goal: ["Squats 200lbs", "Lunges 150lbs"]
    },
    {
        WorkoutName: "Back",
        Exercise: ["Deadlifts", "Pullups", "Rows"],
        Goal: ["Deadlifts 200lbs", "Pullups 150lbs", "Rows 150lbs"]
    }
];

const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Week = WeekWorkout.map((Workout, i) => {
    return {
        Day: WeekDays[i],
        WorkoutName: Workout.WorkoutName,
        Exercise: Workout.Exercise,
        Goal: Workout.Goal
    };
});

function Profile() {
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [week, setWeek] = useState(Week);
    // const [addInfoToUser] = useMutation(ADD_INFO_TO_USER);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};
    console.log(userData);

    const openModal = () => {
        setIsModalOpen(true);
        console.log("open modal");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log("close modal");
    };

    const saveChanges = () => {
        setIsModalOpen(false);
        console.log("save changes");
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id="ProfilePage" className="card">
            <div>
                <div id="ProfileTop">
                    <div>
                        <img src="https://via.placeholder.com/150" alt="profile" />
                    </div>
                    <a href="#">Change Avatar</a>
                    <p>{userData.firstName} {userData.lastName}</p>
                    <p>{personalInfo.age}</p>
                    <p>{personalInfo.bio}</p>
                    <p>{personalInfo.height}</p>
                    <p>{personalInfo.weight}Lbs</p>
                    <div id="ProfileEdit">
                        <button type="button" className="btn" onClick={openModal}>Edit Profile</button>
                    </div>
                    <p>Weight Goal</p>
                    <div id="ProfileWeightGoal">
                        <button type="button" className="btn"> - </button>
                        <h2>{personalInfo.weightGoal}</h2>
                        <button type="button" className="btn"> + </button>
                    </div>
                    <p>Calorie Deficit:</p>
                    <h2>example</h2>
                </div>
            </div>
            {week.map((day, i) => {
                return <DayCards key={i} day={day} />;
            })}
            <ProfileInfoModal showModal={isModalOpen} closeModal={closeModal} saveChanges={saveChanges} />
        </div>
    );
}

export default Profile;