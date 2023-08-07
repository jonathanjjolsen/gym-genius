import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_PROFILE } from '../utils/mutations';

const ProfileInfoModal = ({ showModal, closeModal, saveChanges }) => {
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [weight, setWeight] = useState('');
    const [weightGoal, setWeightGoal] = useState('');

    // age must be a number between 0 and 100
    // bio must be a string with a max length of 280 characters
    // height must be a string
    // weight must be a number between 0 and 500
    // weightGoal must be a number between 0 and 500
    const handleFeetChange = (event) => {
        const value = parseInt(event.target.value);
        setFeet(value);
    };

    const handleInchesChange = (event) => {
        const value = parseInt(event.target.value);
        setInches(value);
    };

    const handleWeightChange = (event) => {
        const value = parseInt(event.target.value);
        setWeight(value);
    };

    const handleWeightGoalChange = (event) => {
        const value = parseInt(event.target.value);
        setWeightGoal(value);
    };

    const handleAgeChange = (event) => {
        const value = parseInt(event.target.value);
        setAge(value);
    };

    const formattedHeight = `${feet}'${inches}"`;

    const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE);
    
    const handleSaveChanges = () => {
        const updatedPersonalInfo = {
            age,
            bio,
            height: formattedHeight,
            weight,
            weightGoal,
        };
        saveChanges(updatedPersonalInfo);
        console.log(updatedPersonalInfo);
        updateUserProfile({
            variables: updatedPersonalInfo,
        });
    };

    return (
        <div className={`modal ${showModal ? 'd-block' : ''}`}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Profile</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="age">Age:</label>
                        <input type="number"className="form-control" id="age" name="age" min="0" value={age} onChange={handleAgeChange} />

                        <label htmlFor="bio">Bio:</label>
                        <textarea className="form-control" id="bio" rows="1" value={bio} onChange={(e) => setBio(e.target.value)} />

                        <label htmlFor="height">Height:</label>
                        <div className="input-group">
                            <input type="number" className="form-control" id="feet" name="feet" min="0" value={feet} onChange={handleFeetChange} />
                            <span className="input-group-text">Feet</span>
                            <input type="number" className="form-control" id="inches" name="inches" min="0" max="11" value={inches} onChange={handleInchesChange}/>
                            <span className="input-group-text">Inches</span>
                        </div>

                        <label htmlFor="weight">Weight:</label>
                        <textarea
                            className="form-control" id="weight" rows="1" placeholder="Weight In Lbs" maxLength={3} value={weight} onChange={handleWeightChange} />

                        <label htmlFor="weightGoal">Weight Goal:</label>
                        <textarea className="form-control" id="weightGoal" rows="1" placeholder="Weight Goal In Lbs" maxLength={3} value={weightGoal} onChange={handleWeightGoalChange} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfoModal;
