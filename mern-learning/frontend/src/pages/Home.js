import { useState, useEffect } from "react";

//components and pages
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {   
        const fetchWorkouts = async () => {
            const res = await fetch('/api/workouts/')
            const json = await res.json() //get json data from the response

            if (res.ok) {
                setWorkouts(json); //set the workouts' state
            }
        }

        fetchWorkouts();
    }, [])// only fires once

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {// if the workouts is not null, fire the map method
                    return <WorkoutDetails key={workout._id} workout={workout}/> //pass workout object as parameter named workout
                })}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;