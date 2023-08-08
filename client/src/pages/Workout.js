import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';


function Workout() {

    useEffect(() => {

    }, [])

    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};
    console.log(userData);

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 text-center text-white'>
                    <h1 className='mb-5'>Your Workouts</h1>
                    <div>
                        {userData.workouts?.length > 0 && (
                            <div>
                                {userData.workouts.map(workout => (
                                    <div key={workout._id} class="card text-center mb-5">
                                        <div className="card-header fs-2 bg-dark py-2" >
                                            {workout.workoutName}
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title"></h5>
                                            {workout.exercises.map(exercise => (
                                                <p class="card-text fs-4" key={exercise._id} >{exercise.name}</p>
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

    )
}

export default Workout