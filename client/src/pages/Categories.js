import React, {useState}from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from '../utils/queries';
import WorkoutModal from '../Components/WorkoutModal';

const Categories = () => {

    const { loading, data } = useQuery(GET_EXERCISES)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveChanges = () => {
        console.log('Changes saved');
        setIsModalOpen(false);
    };

    const exercises = data?.exercises || {};

    if (loading) return <p>Loading...</p>;

    //Function to sort exercises by category
    function sortExercises(exercises) {
        const exercisesByCategory = {};

        exercises.forEach(exercise => {
            const { CategoryName } = exercise.category;

            if (!exercisesByCategory[CategoryName]) {
                exercisesByCategory[CategoryName] = [];
            }

            exercisesByCategory[CategoryName].push(exercise);
        }
        );
        //returns an object with the category name as the key and an array of exercises as the value
        return exercisesByCategory;
    };

    const exercisesByCategory = sortExercises(exercises);

    //Return statement generates an accordion for each category and populates it with exercises from that category
    return (

        <div className="app-container text-center">
            <button type="button" className="btn" onClick={openModal}>
                Edit Profile
            </button>
            <WorkoutModal showModal={isModalOpen}closeModal={closeModal}saveChanges={saveChanges}/>

            {Object.entries(exercisesByCategory).map(([categoryName, exercises]) => (
                <div className="accordion accordion-flush mb-5 mx-auto " key={categoryName} id={`accordionFlushExample-${categoryName}`}>
                    <div className="accordion-item ">
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
                                    <div key={exercise.name}>
                                        <h3>{exercise.name}</h3>
                                        <p>{exercise.description}</p>
                                        <a className='btn btn-warning'>Add to Workout</a>
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