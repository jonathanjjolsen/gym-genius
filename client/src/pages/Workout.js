import React from 'react';
import './styles.css';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

function Workout() {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};
    console.log(userData);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {userData.workouts.map((workout) => (
                <div className="accordion accordion-flush mb-5 mx-auto" key={workout.workoutName} id={`accordionFlushExample-${workout.workoutName}`}>
                    <div className="accordion-item w-50 mx-auto">
                        <h2 className="accordion-header text-center bg-dark">
                            <button
                                className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-2 mx-auto text-center d-block underline"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse-${workout.workoutName}`}
                                aria-expanded="false"
                                aria-controls={`flush-collapse-${workout.workoutName}`}
                            >
                                {workout.workoutName}
                            </button>
                        </h2>
                        <div id={`flush-collapse-${workout.workoutName}`} className="accordion-collapse collapse bg-dark text-light" data-bs-parent={`#accordionFlushExample-${workout.workoutName}`}>
                            <div className="accordion-body">
                                {workout.exercises.map((exercise) => (
                                    <div key={exercise._id} className="mb-5">
                                        <img className="fs-6" src={exercise.url}></img>
                                        <h3 className="fs-4">{exercise.name}</h3>
                                        <p className="fs-6">{exercise.instructions}</p>
                                        <p className="fs-6">{exercise.mainMuscles}</p>
                                        <p className="fs-6">{exercise.minorMuscles}</p>
                                        <p className="fs-6">{exercise.equipment}</p>
                                        <p className="fs-6">{exercise.difficulty}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Workout;