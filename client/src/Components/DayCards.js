import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DayCards = (x) => {
    var day = x.day.Day;
    var WorkoutName = x.day.WorkoutName;
    var Exercise = x.day.Exercise;
    var Goal = x.day.Goal;

    const ExercisesList = () => {
        return Exercise.map((exercise, index) => (
            <h2 key={index}>{exercise}</h2>
        ));
    };

    const GoalsList = () => {
        return Goal.map((goal, index) => (
            <h5 key={index}>{goal}</h5>
        ));
    };

    return (
        <div id="ProfileCards" className="card">
            <div className="card-body col-md-12">

                <div id="CardEdit">
                    <a href="#">Edit</a>
                </div>

                <div id="CardTitle">
                    <h1>{day}</h1>
                    <p>{WorkoutName} Workout</p>
                </div>

                <div id="CardBtm">
                    <div id="CardExc">
                            {ExercisesList()}
                    </div>
                    <div id="CardGoal">
                        <h1>Goals:</h1>
                        <ul>
                            {GoalsList()}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DayCards;
