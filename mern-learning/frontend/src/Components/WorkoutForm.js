import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [loads, setLoads] = useState('');
  const [err, setErr] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault() //prevent page to refresh after submit

    const workout = {title, reps, loads}

    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: { 'Content-Type': 'application/json' }
    }) //post request link from the backend

    const json = await res.json() //if the req succeed, server sends back json

    if (!res.ok) {
      setErr(json.err) // throw an err to the screen if the req failed
      console.log(json.err)
    } else {
      setTitle('') //reset the field (if the user want to add multiple workouts in one go)
      setReps('')
      setLoads('')
      setErr(null)
      console.log("new workout added")
    }
  }

  return(
    <form className="create" onSubmit={handleSubmit} >
      <h3>Add a new Workout</h3>
      <label>Exercise Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Reps:</label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <label>Loads:</label>
      <input 
        type="number"
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
      />
      <button>Add Workout</button>
      {err && <div className="error">{err}</div>}
    </form>
  )
}

export default WorkoutForm;