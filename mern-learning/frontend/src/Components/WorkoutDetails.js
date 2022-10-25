const workoutDetails = ({ workout }) => {
  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Loads (kg): </strong>{workout.loads}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default workoutDetails;