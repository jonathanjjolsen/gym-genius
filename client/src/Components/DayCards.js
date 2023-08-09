import React from 'react';

const DayCards = (props) => {
  const { week } = props;
  const Workouts = week.workouts;
  const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div id='DayCard'>
      <div id='DayCardInner'>
      <h1> Workout Week</h1>
        {Workouts.slice(0, 7).map((workout, index) => (
          <div key={index} id="CardBottom">
            <div id="CardBottom1">
              <h3> {WeekDays[index]}</h3>
              <p> Workout:  {workout.workoutName}</p>
            </div>
            <div id="CardBottom2">
              <h4>Exercises</h4>
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
