import React, { useState } from 'react';
import DayCards from '../Components/DayCards';

function Profile() {
    return (
        <div id="WorkoutPage" class="card ">
            <div id="WorkoutProflie">

                <div id="WorkoutProfileTop">
                    <div id="WorkoutProflieImg">
                        <img src="https://via.placeholder.com/150" alt="profile" />
                    </div>
                    <a href="#">Change Avatar</a>
                    <p>Username</p>
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