import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



const DayCards = () => {
    return (
        <div id="WorkoutCards" class="card ">
            <div class="card-body col-md-12">

                <div id="WorkoutEdit">
                    <a href="#">Edit</a>
                </div>

                <div id="WorkoutTitle">
                    <h1>Day Workout</h1>
                    <p>Workout type</p>
                </div>


                <div id="WorkcardBtm">
                    <div>
                        <ul id="WorkoutExc">
                            <li>Exercise 1</li>
                            <li>Exercise 2</li>
                            <li>Exercise 3</li>
                            <li>Exercise 4</li>
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
