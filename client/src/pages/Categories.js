import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from '../utils/queries';

const Categories = () => {

    console.log('Executing GET_EXERCISES query')
    const { loading, data } = useQuery(GET_EXERCISES)

    const exercises = data?.exercises || {};

    if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    // if (!data) {
    //     return null;
    // }

    console.log(exercises);

    return (
        <div className="app-container text-center">
            <h1 className='m-4'>Categories</h1>


            <div className="accordion accordion-flush mb-5 mx-auto " id="accordionFlushExample">
                <div className="accordion-item ">
                    {/* The accordion-button class adds flex property, so I negated it with the class d-block to center text */}
                    <h2 className="accordion-header text-center bg-dark">
                        <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-4 mx-auto text-center d-block" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Upper Body
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3>Pull Ups</h3>
                            <p>This is a great exercise to target your chest and arms with little to no equipment</p>
                            <a className='btn btn-warning'>Add to Workout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion accordion-flush mb-5 mx-auto " id="accordionFlushExample">
                <div className="accordion-item ">
                    {/* The accordion-button class adds flex property, so I negated it with the class d-block to center text */}
                    <h2 className="accordion-header text-center bg-dark">
                        <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-4 mx-auto text-center d-block" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Lower Body
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3>Pull Ups</h3>
                            <p>This is a great exercise to target your chest and arms with little to no equipment</p>
                            <a className='btn btn-warning'>Add to Workout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion accordion-flush mb-5 mx-auto " id="accordionFlushExample">
                <div className="accordion-item ">
                    {/* The accordion-button class adds flex property, so I negated it with the class d-block to center text */}
                    <h2 className="accordion-header text-center bg-dark">
                        <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-4 mx-auto text-center d-block" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Cardio
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3>Pull Ups</h3>
                            <p>This is a great exercise to target your chest and arms with little to no equipment</p>
                            <a className='btn btn-warning'>Add to Workout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion accordion-flush mb-5 mx-auto " id="accordionFlushExample">
                <div className="accordion-item ">
                    {/* The accordion-button class adds flex property, so I negated it with the class d-block to center text */}
                    <h2 className="accordion-header text-center bg-dark">
                        <button className="accordion-button collapsed text-light bg-dark rounded w-100 h-100 fs-4 mx-auto text-center d-block" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Core
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3>Pull Ups</h3>
                            <p>This is a great exercise to target your chest and arms with little to no equipment</p>
                            <a className='btn btn-warning'>Add to Workout</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Categories;


            // <div className='accordion-container d-flex flex-column justify-content-center align-items-center'>

            //     <Accordion
            //         title="Upper Body"
            //         content="A Workout"
            //     />
            //     <Accordion
            //         title="Lower Body"
            //         content="Another Workout"
            //     />
            //     <Accordion
            //         title="Cardio"
            //         content="Yet Another Workout"
            //     />
            //     <Accordion
            //         title="Core"
            //         content="You guessed it, ANOTHER workout"
            //     />
            // </div>


        // <div className='container'>
        //     <div className="accordion" id="accordionExample">

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        //                     Upper Body
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse collapse show bg-dark text-white" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body row">
        //                     <div className='text-center'>

        //                         <strong>Workout 1</strong>
        //                         <br />
        //                         Just a test description
        //                         <br />
        //                         <button className='rounded'>Add to Workout</button>
        //                     </div>
        //                 </div>
        //                 <div className="accordion-body text-center">
        //                     <strong>Workout 1</strong>
        //                     <br />
        //                     Just a test description
        //                     <br />
        //                     <button className='rounded'>Add to Workout</button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        //                     Lower Body
        //                 </button>
        //             </h2>
        //             <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 2</strong> Another test description
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        //                     Cardio
        //                 </button>
        //             </h2>
        //             <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 3</strong> Yet again, another test description.
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        //                     Core
        //                 </button>
        //             </h2>
        //             <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 4</strong> You guessed it! ANOTHER test description
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>