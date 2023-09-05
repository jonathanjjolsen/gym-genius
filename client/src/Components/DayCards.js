import React from 'react';
import { Link } from 'react-router-dom';

const DayCards = (props) => {
  const { week } = props;
  const Workouts = week.workouts;
  const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div id='DayCard'>
      <div id='DayCardInner'>
        <h2 className='fs-1 '><Link className="text-decoration-none" to={'/Workout'}> Your Workouts</Link></h2>
        {Workouts.slice(0, 7).map((workout, index) => (
          <div key={index} id="CardBottom" className='shadow rounded'>
            <div id="CardBottom1">
              {/* <h3> {WeekDays[index]}</h3> */}
              <h3>{workout.workoutName}</h3>
            </div>
            <div id="CardBottom2" className='text-center'>
              <h4 >Exercises</h4>
              <ul>
                {workout.exercises.map((exercise, exIndex) => (
                  <p key={exIndex}>{exercise.name}</p>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCards;
