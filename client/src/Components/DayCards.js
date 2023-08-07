import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DayCards = ({week}) => {

    



    return (
              <div id='DayCard'>
                <button id='DayCardButton'>Edit</button>
                {week.map((day, index) => (
                  <div id='DayCardInner'
                  key={index}>
                    <h3>{day.Day}</h3>
                    <h4>Workout:</h4>
                    <p>{day.WorkoutName}</p>
                    <h4>Excercises:</h4>
                    <p>{day.Exercise.join(', ')}</p>
                    <h4>Goals:</h4>
                    <p>{day.Goal.join(', ')}</p>
                  </div>
                ))}
              </div>
            );
          };
          

export default DayCards;
