import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { UPDATE_USER_PROFILE } from '../utils/mutations';
import DayCards from '../Components/DayCards';
import ProfileInfoModal from '../Components/ProfileInfoModal';
import renderAvatar from '../Components/Avatar';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.user || {};
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

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
        closeModal();
      })
      .catch((error) => {
        console.error('Mutation error:', error);
      });
  };

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
      const newFileName = `${userData.email}.${fileExtension}`;
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
      window.location.reload();
    } catch (error) {
      console.error(error);
      setMessage('Error uploading the file');
      swal({
        title: "Upload Error",
        text: "Failed To Upload File",
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderGoals = () => {
    if (userData.Goals === null || userData.Goals === '') {
      return (
        <p className='grey-bg py-4 mx-3 rounded shadow'>Add your workout goals in the edit profile section!</p>
      )
    }
    else {
      return (
        <p className='grey-bg py-4 mx-3 rounded shadow'>{userData.Goals}</p>
      )
    }
  }

  const renderWorkouts = () => {
    if (userData.workouts === null || userData.workouts === '') {
      return (
        <p className='grey-bg py-4 mx-3 rounded shadow'>Add your workout goals in the edit profile section!</p>
      )
    }
    else {
      return (
        <DayCards week={userData} />
      )
    }
  }

  return (
    <div id="ProfilePage" className="container mt-5 rounded">
      <div className='row text-white'>
        <div id="ProfileTop" className='col text-center'>
          <div>
            <img src={renderAvatar(userData.email)} alt="profile pic" />
          </div>
          <div>
            <form onSubmit={handleUpload} className='mx-auto'>
              <div>
                <input type="file" accept='.jpg' onChange={handleFileChange} className=' text-center py-2 my-2 btn btn-secondary fs-5 rounded' />
              </div>
              <div className='text-center mt-2'>
                <button type='submit' className='rounded fs-5 btn' id='uploadBtn'>Upload</button>
              </div>
            </form>
          </div>
          <hr className='mx-5'></hr>
          <div id="ProfileEdit" className=" text-center py-3 mx-4 ">
            <button type="button" className="btn fs-5 customBtn" onClick={openModal}>Edit Profile</button>
          </div>
          <div id="ProfileInfo" >
            <h1 className='py-3'>{userData.firstName} {userData.lastName}</h1>
            <h2 className='py-3 fs-3'>{userData.age} Years Old</h2>
            <h2 className='py-2 fs-3'>Bio:</h2>
            <p className='py-2 fs-4'>{userData.bio} </p>
            <h2 className='py-2 fs-3'>Height:</h2>
            <p className='py-2 fs-4'>{userData.height}</p>
            <h2 className='py-2 fs-3'> Current Weight:</h2>
            <p className='py-2 fs-4'>{userData.weight} Lbs</p>
            <h2 className='py-2 fs-3'>Goal Weight:</h2>
            <p className='py-2 fs-4'>{userData.weightGoal} Lbs</p>
          </div>
        </div>
      </div>
      <div id="ProfileBottom" className='row text-white mb-5 pb-5 text-center'>
        <div className='col'>
          <div id="ProfileWorkoutGoals">
            <h2 className='white-shadow fs-1 pt-4'>Workout Goals:</h2>
            {renderGoals()}
          </div>
          {renderWorkouts()}
          {/* <DayCards week={userData} /> */}
        </div>
      </div>

      <ProfileInfoModal showModal={isModalOpen} closeModal={closeModal} saveChanges={saveChanges} />
    </div>
  );
}

export default Profile;
