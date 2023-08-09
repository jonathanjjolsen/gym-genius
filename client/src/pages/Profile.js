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

  return (
    <div id="ProfilePage" className="card">
      <div>
        <div id="ProfileTop">
          <div id="ProfileEdit" className="slide-fade-button">
            <button type="button" className="btn" onClick={openModal}>Edit Profile</button>
          </div>
          <div>
            <img src={renderAvatar(userData.email)} alt="https://via.placeholder.com/150x150/2b2b2b/ffffff?text=Ghost" />
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
          </div>
        </div>
      </div>
      <div id="ProfileBottom">
        <DayCards week={userData} />
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
