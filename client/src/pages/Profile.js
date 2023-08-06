import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import DayCards from '../Components/DayCards';
import './homepage.css'


function Profile() {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    
    
    return (
        <div id="WorkoutPage" class="card ">
            <div id="WorkoutProflie">

                <div id="WorkoutProfileTop">
                    <div id="WorkoutProflieImg">
                        <img src="https://via.placeholder.com/150" alt="profile" />
                    </div>
                    <a href="#">Change Avatar</a>
                    <p>{userData.firstName} {userData.lastName}</p>
                    <p>Age</p>
                    <p>Bio?</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <div id="WorkoutWeightGoal">
                        <button type="button" class="btn ">- |</button>
                        <h2>100lbs</h2>
                        <button type="button" class="btn ">| +</button>
                    </div>
                </div>

                <div id="WorkoutProfileBtm" >
                    <DayCards />
                    <DayCards />
                    <DayCards />
                    <DayCards />
                    <DayCards />
                    <DayCards />
                    <DayCards />
                </div>
            </div>

            <div />

        </div>
    );
}

export default Profile;