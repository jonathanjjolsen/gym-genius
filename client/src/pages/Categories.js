import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT } from '../utils/mutations';
import AuthService from '../utils/auth';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';


const Categories = () => {
    const navigate = useNavigate();
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
        if (!AuthService.loggedIn()) {
            swal({
                title: "Unable To Create Workout",
                text: "You must be logged in to create a workout",
                icon: "warning",
                dangerMode: true,
            })
            return;
        }

        try {
            const response = await createWorkout({
                variables: {
                    workoutName: workoutName,
                    selectedExercises: selectedExercises.map(exercise => exercise._id)
                }
            })
            navigate("/Workout");
            navigate(0)
        } catch (err) {
            console.error(err);
        }
    };

    const exercisesByCategory = sortExercises(exercises);

    // Return statement generates an accordion for each category and populates it with exercises from that category
    return (
        <div className="container text-center ">
            <h1 className='m-4 fw-bold text-white'>Categories</h1>
            {selectedExercises?.length > 0 && (
                <div className="selected-exercises mb-4 text-white">
                    <h2 className='underline'>Selected Exercises</h2>
                    <input type="text" placeholder="Workout Name" value={workoutName} onChange={handleWorkOutNameChange} />
                    {selectedExercises.map(exercise => (
                        <div key={uuidv4()} className='m-3'>
                            <h3>{exercise.name}</h3>
                        </div>
                    ))}
                    <button className="btn btn-success customBtn text-black" onClick={handleCreateWorkout}>Create Workout</button>
                </div>
            )}
            {Object.entries(exercisesByCategory).map(([categoryName, exercises]) => (
                <div className="accordion accordion-flush mb-5 mx-auto " key={categoryName} id={`accordionFlushExample-${categoryName}`}>
                    <div className="accordion-item w-50 mx-auto">
                        <h2 className="accordion-header text-center bg-dark">
                            <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-2 mx-auto text-center d-block underline"
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
                                        <h3 className='fs-4'>{exercise.name}</h3>
                                        <p className='fs-6'>{exercise.instructions}</p>
                                        <button
                                            className='btn btn-warning customBtn'
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