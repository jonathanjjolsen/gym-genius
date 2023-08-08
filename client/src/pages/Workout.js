import React from 'react';
import './styles.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_WORKOUT } from '../utils/mutations';

function Workout() {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.user || {};


    const [removeWorkout] = useMutation(REMOVE_WORKOUT);
    
    const handleRemoveWorkout = async (workoutId) => {
        try {
            const response = await removeWorkout({
                variables: { workoutId: workoutId }
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            {userData.workouts.map((workout) => (
                <div key={workout.workoutName}>
                    <div className="accordion accordion-flush mb-5 mx-auto" id={`accordionFlushExample-${workout.workoutName}`}>
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
                                        <div key={exercise._id} id="CreatedWorkouts" className="mb-5">
                                            <img id="WorkoutImageSZ" className="fs-6" src={exercise.url} alt={exercise.name} />
                                            <h1 className="fs-4">{exercise.name}</h1>
                                            <div id="WorkoutInfo">
                                                <div id="WKSection1">
                                                    <h4>How To</h4>
                                                    <p className="fs-6">{exercise.instructions} </p>
                                                    <h4>Rating</h4>
                                                    <p className="fs-6">{exercise.difficulty}</p>
                                                </div>
                                                <div id="WKSection2">
                                                    <h4>Main Muscles</h4>
                                                    <p className="fs-6">{exercise.mainMuscles}</p>
                                                    <h4>Minor </h4>
                                                    <p className="fs-6">{exercise.minorMuscles}</p>
                                                    <h4>Equipment</h4>
                                                    <p className="fs-6">{exercise.equipment}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button id="WorkoutDelete" className='btn btn-success customBtn text-black' onClick={() => handleRemoveWorkout(workout._id)}>
                            Delete Workout
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Workout;