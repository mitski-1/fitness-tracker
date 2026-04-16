import { useState } from "react";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [input, setInput] = useState("");

  const addWorkout = () => {
    if (!input) return;

    const newWorkout = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString()
    };

    setWorkouts([...workouts, newWorkout]);
    setInput("");
  };

  return (
    <div>
      <h1>Fitness Tracker</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Workout"
      />

      <button onClick={addWorkout}>Add</button>

      {workouts.map((w) => (
        <div key={w.id}>
          <p>{w.text}</p>
          <p>{w.time}</p>
        </div>
      ))}
    </div>
  );
}

export default App;