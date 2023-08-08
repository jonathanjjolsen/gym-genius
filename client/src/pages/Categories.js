import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT } from '../utils/mutations';
import AuthService from '../utils/auth';

const Categories = () => {

    const [selectedExercises, setSelectedExercises] = useState([]);

    const { loading, data } = useQuery(GET_EXERCISES);
    const [createWorkout] = useMutation(CREATE_WORKOUT);

    const [workoutName, setWorkoutName] = useState('');

    const exercises = data?.exercises || {};

    if (loading) return <p>Loading...</p>;

    // Function to add an exercise to selectedExercises
    const addToWorkout = async (exercise) => {
        setSelectedExercises(prevSelectedExercises => [...prevSelectedExercises, exercise]);
    };

    const handleWorkOutNameChange = (event) => {
        setWorkoutName(event.target.value);
    };

    // Function to sort exercises by category
    function sortExercises(exercises) {
        const exercisesByCategory = {};

        exercises.forEach(exercise => {
            const { CategoryName } = exercise.category;

            if (!exercisesByCategory[CategoryName]) {
                exercisesByCategory[CategoryName] = [];
            }

            exercisesByCategory[CategoryName].push(exercise);
        });
        // Returns an object with the category name as the key and an array of exercises as the value
        return exercisesByCategory;
    }

    // Function to create a workout
    const handleCreateWorkout = async () => {
        console.log('Selected Exercises', selectedExercises)
        console.log(selectedExercises);
        if (!AuthService.loggedIn()) {
            console.log('You must be logged in to create a workout');
            return;
        }
        
        try {
            const response = await createWorkout({
                variables: {
                    workoutName: workoutName,
                    selectedExercises: selectedExercises.map(exercise => exercise._id)
                }
            })
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const exercisesByCategory = sortExercises(exercises);

    // Return statement generates an accordion for each category and populates it with exercises from that category
    return (
      
        <div className="container text-center ">



            <h1 className='m-4'>Categories</h1>

            {selectedExercises?.length > 0 && (
                <div className="selected-exercises mb-4">
                    <h2>Selected Exercises</h2>
                    <input type="text" placeholder="Workout Name" value={workoutName} onChange={handleWorkOutNameChange}/>
                    {selectedExercises.map(exercise => (
                        <div key={exercise.id} className='m-3'>
                            <h3>{exercise.name}</h3>
                        </div>
                    ))}
                    <button className="btn btn-success" onClick={handleCreateWorkout}>Create Workout</button>
                </div>
            )}

            {Object.entries(exercisesByCategory).map(([categoryName, exercises]) => (
                <div className="accordion accordion-flush mb-5 mx-auto " key={categoryName} id={`accordionFlushExample-${categoryName}`}>
                    <div className="accordion-item w-50 mx-auto">
                        <h2 className="accordion-header text-center bg-dark">
                            <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-4 mx-auto text-center d-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse-${categoryName}`}
                                aria-expanded="false"
                                aria-controls={`flush-collapse-${categoryName}`}>
                                {categoryName}
                            </button>
                        </h2>
                        <div id={`flush-collapse-${categoryName}`} className="accordion-collapse collapse bg-dark text-light" data-bs-parent={`#accordionFlushExample-${categoryName}`}>
                            <div className="accordion-body">
                                {exercises.map(exercise => (
                                    <div key={exercise.name} className='mb-5'>
                                        <h3>{exercise.name}</h3>
                                        <p>{exercise.description}</p>
                                        <button
                                            className='btn btn-warning'
                                            onClick={() => addToWorkout(exercise)}
                                        >
                                            Add to Workout
                                        </button>
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

export default Categories;