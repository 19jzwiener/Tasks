import "./Sidebar.css";
import Workout from "./Workout";
import Task from "./Task";
import Weather from "./Weather";

import { useState } from "react";

function Sidebar(props) {
  // allow task popout to open and close
  const [taskOpen, setTaskOpen] = useState(false);

  // allow workout popout to open and close
  const [workoutOpen, setWorkoutOpen] = useState(false);

  const [weatherOpen, setWeatherOpen] = useState(false);

  return (
    <div className="sidebar">
      {/* top box for the left sidebar */}
      <div className="sidebar__header">
        <div className="greeting">Joseph Zwiener</div>
        <div className="select">What to do?</div>
      </div>

      {/* linebreak between different sets of information */}
      <div className="sidebar__lineBreak" />

      {/* popout window buttons */}
      <div className="sidebar__section">
        {/* open and close task popout */}
        <button
          className="sidebar__btn"
          onClick={() => {
            setTaskOpen(!taskOpen);
            setWorkoutOpen(false);
            setWeatherOpen(false);
          }}
        >
          Tasks
        </button>

        {/* open and close workout popout */}
        <button
          className="sidebar__btn"
          onClick={() => {
            setWorkoutOpen(!workoutOpen);
            setTaskOpen(false);
            setWeatherOpen(false);
          }}
        >
          Workouts
        </button>

          {/* open and close weather */}
        <button
          className="sidebar__btn"
          onClick={() => {
            setWeatherOpen(!weatherOpen);
            setWorkoutOpen(false);
            setTaskOpen(false);
          }}
        >
          Weather
        </button>
      </div>

      {/* linebreak between sections */}
      <div className="sidebar__lineBreak" />

      {/* if workout is true do such, if closed null */}
      {workoutOpen ? (
        <div className="sidebar__HomeWorkout">
          <Workout />
        </div>
      ) : null}

      {/* if taskOpen is true do such, if closed null */}
      {taskOpen ? (
        <div>
          <Task />
        </div>
      ) : null}

      {weatherOpen ? (
        <div>
          <Weather />
        </div>
      ) : null}
    </div>
  );
}
export default Sidebar;
