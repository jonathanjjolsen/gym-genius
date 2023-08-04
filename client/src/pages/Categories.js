import React, { useState } from 'react';
import './categories.css';


const Categories = () => {
    return (
        <div>
            <div className="accordion accordion-flush " id="accordionExample">

                <div className="accordion-item m-5">
                    <h2 className="accordion-header">
                        <button className="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Upper Body
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-center">
                            <strong>Workout 1</strong>
                            <br /> 
                            Just a test description
                            <br/>
                            <button className='rounded'>Add to Workout</button>
                        </div>
                    </div>
                </div>

                <div className="accordion-item m-5">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Lower Body
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Workout 2</strong> Another test description
                        </div>
                    </div>
                </div>

                <div className="accordion-item m-5">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Cardio
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Workout 3</strong> Yet again, another test description.
                        </div>
                    </div>
                </div>

                <div className="accordion-item m-5">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Core
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Workout 4</strong> You guessed it! ANOTHER test description
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Categories;