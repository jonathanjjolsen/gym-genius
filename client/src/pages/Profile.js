import React, { useState } from 'react';
import { useQuery,useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { UPDATE_USER_PROFILE } from '../utils/mutations';
import DayCards from '../Components/DayCards';
import ProfileInfoModal from '../Components/ProfileInfoModal';
import calculateCalorieDeficit from '../utils/helpers';


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
    const [week, setWeek] = useState(Week);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE);
  
    const saveChanges = (updatedUserData) => {
      updateUserProfile({ variables: updatedUserData })
        .then((result) => {
          console.log('Mutation result:', result);
          closeModal();
        })
        .catch((error) => {
          console.error('Mutation error:', error);
        });
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
            <p>{userData.age}</p>
            <p>{userData.bio}</p>
            <p>{userData.height}</p>
            <p> Current Weight</p>
            <p>{userData.weight}Lbs</p>
            <p>Goal Weight</p>
            <div id="ProfileWeightGoal">
              <h2>{userData.weightGoal}</h2>
            </div>
            <div id="ProfileEdit">
              <button type="button" className="btn" onClick={openModal}>Edit Profile</button>
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