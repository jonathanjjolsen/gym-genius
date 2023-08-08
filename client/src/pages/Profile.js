import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { UPDATE_USER_PROFILE } from '../utils/mutations';
import DayCards from '../Components/DayCards';
import ProfileInfoModal from '../Components/ProfileInfoModal';
import calculateCalorieDeficit from '../utils/helpers';
import renderAvatar from '../Components/Avatar';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';


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
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  console.log(userData);

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
        console.log(updatedUserData);
      });
  };
  const calorieDeficit = Math.round(
    calculateCalorieDeficit(userData.weight, userData.weightGoal, parseInt(userData.age), parseInt(userData.height))
  );

  // Upload Avatar form functionality
  const handleFileChange = (fileEvent) => {
    setSelectedFile(fileEvent.target.files[0]);
  };

  const handleUpload = async (submitEvent) => {
    try {
      submitEvent.preventDefault();

      if (!selectedFile) {
        setMessage('Please select a file');
        return;
      }

      // Delete old file from AWS Bucket
      const delResponse = await fetch(`/delete/:${userData.email}.jpg`, {
        method: 'DELETE'
      });

      if (delResponse.ok) {
        setMessage('File deleting successfully');
      } else {
        setMessage('Error deleting the file, may not exist');
      }

      const formData = new FormData();
      const ogFileName = selectedFile.name;
      const fileExtension = ogFileName.split('.').pop();
      const newFileName = `${userData.email}${'.' + fileExtension}`;
      formData.append('file', selectedFile, newFileName);

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMessage('File uploaded successfully');
      } else {
        setMessage('Error uploading the file');
      }

      setSelectedFile(null);
      window.location.reload()
    } catch (error) {
      console.error(error);
      setMessage('Error uploading the file');
      swal({
        title: "Upload Error",
        text: "Failed To Upload File",
        icon: "warning",
        dangerMode: true,
      })
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="ProfilePage" className="card">
      <div>
        <div id="ProfileTop">
          <div id="ProfileEdit" className="slide-fade-button">
            <button type="button" className="btn" onClick={openModal}>Edit Profile</button>
          </div>
          <div>
            <img src={renderAvatar(userData.email)} alt="profile" />
          </div>
          <div>
            <form onSubmit={handleUpload} className='mx-auto'>
              <div>
                <input type="file" accept='.jpg' onChange={handleFileChange} className=' text-center py-2 my-2 btn btn-secondary rounded' />
              </div>
              <div className='text-center mt-2'>
                <button type='submit' className='rounded fs-5 btn' id='uploadBtn'>Upload</button>
              </div>
            </form>
          </div>
          <div id='infoContainer'>
            <div id="ProfileInfo" >
              <h1>{userData.firstName}</h1>
              <h2>{userData.age} Years Old</h2>
              <h2>Bio:</h2>
              <p>{userData.bio} </p>
              <h2>Height:</h2>
              <p>{userData.height}</p>
              <h2> Current Weight:</h2>
              <p>{userData.weight} Lbs</p>
              <h2>Goal Weight:</h2>
              <p>{userData.weightGoal} Lbs</p>
              <h2> Daily Calorie Deficit:</h2>
              <p>{calorieDeficit} Calories</p>
            </div>
            <div id='workoutInfo'>
              <h1>Your Workouts</h1>
              {userData.workouts?.length > 0 && (
                <div>
                  {userData.workouts.map(workout => (
                    <div key={workout._id} className='m-3'>
                      <h2>{workout.workoutName}</h2>
                      <div>
                        {workout.exercises.map(exercise => (
                          <div key={uuidv4()}>
                            <h3>{exercise.name}</h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="ProfileBottom">
        <DayCards week={week} />
        <div id="ProfileWorkoutGoals">
          <h2>Workout Goals:</h2>
          <p>{userData.Goals}</p>
        </div>
      </div>

      <ProfileInfoModal showModal={isModalOpen} closeModal={closeModal} saveChanges={saveChanges} />
    </div>
  );
}

export default Profile;