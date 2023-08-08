import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DayCards = ({ week }) => {





  return (
    <div id='DayCard'>

      <button id='DayCardButton' className='rounded border-none btn'>Edit</button>

   

      {week.map((day, index) => (
        <div id='DayCardInner'
          key={index}>

          <h3>{day.Day}</h3>
          <div id="CardBottom">
            <div id="CardBottom1">
              <h4>Workout:</h4>
              <p>{day.WorkoutName}</p>
            </div>

            <div id="CardBottom2">
              <h4>Excercises:</h4>
              <p>{day.Exercise.join(', ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default DayCards;
