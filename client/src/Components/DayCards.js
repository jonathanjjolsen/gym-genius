import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DayCards = ({ week }) => {





  return (
    <div id='DayCard'>

      <button id='DayCardButton'>Edit</button>

      <h1> Workouts</h1>

      {week.map((day, index) => (
        <div id='DayCardInner'
          key={index}>

          <h3>{day.Day}</h3>
          <div id="CardBottom">
            <div id="CardBottomLeft">
              <h4>Workout:</h4>
              <p>{day.WorkoutName}</p>
            </div>

            <div id="CardBottomMiddle">
              <h4>Excercises:</h4>
              <p>{day.Exercise.join(', ')}</p>
            </div>

            <div id="CardBottomRight">
              <h4>Goals:</h4>
              <p>{day.Goal.join(', ')}</p>
            </div>
          </div>



        </div>
      ))}
    </div>
  );
};


export default DayCards;
