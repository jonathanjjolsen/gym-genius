import 'bootstrap/dist/css/bootstrap.min.css';




const DayCards = (x) => {
    var day = x.day.Day;
    var WorkoutType = x.day.WorkoutType;
    var Exercise = x.day.Exercise;
    var Goal = x.day.Goal;
    // console.log(day);
    // console.log(WorkoutType);
    // console.log(Exercise);
    // console.log(Goal);


    return (
        <div id="WorkoutCards" class="card ">
            <div class="card-body col-md-12">

                <div id="WorkoutEdit">
                    <a href="#">Edit</a>
                </div>

                <div id="WorkoutTitle">
                    <h1>{day}</h1>
                    <p>{WorkoutType} Workout</p>
                </div>


                <div id="WorkcardBtm">
                    <div>
                        <ul id="WorkoutExc">
                            <li>{Exercise}</li>
                        </ul>
                    </div>
                    <div id="WorkoutGoal">
                        <h1>Goals</h1>
                        <p>Goal 1</p>
                        <p>Goal 2</p>
                        <p>Goal 3</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DayCards;
