import 'bootstrap/dist/css/bootstrap.min.css';




const DayCards = (x) => {
    var day = x.day.Day;
    var WorkoutName = x.day.WorkoutName;
    var Exercise = x.day.Exercise;
    var Goal = x.day.Goal;
    console.log(day);
    console.log(WorkoutName);
    console.log(Exercise);
    console.log(Goal);


    return (
        <div id="WorkoutCards" class="card ">
            <div class="card-body col-md-12">

                <div id="WorkoutEdit">
                    <a href="#">Edit</a>
                </div>

                <div id="WorkoutTitle">
                    <h1>{day}</h1>
                    <p>{WorkoutName} Workout</p>
                </div>


                <div id="WorkcardBtm">
                    <div>
                        <ul id="WorkoutExc">
                            <li>{Exercise}</li>
                        </ul>
                    </div>
                    <div id="WorkoutGoal">
                        <h1>Goals</h1>
                        <ul>
                            <li>{Goal}</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DayCards;
