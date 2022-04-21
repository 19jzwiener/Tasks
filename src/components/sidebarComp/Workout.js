import React from "react";
import "./Workout.css";

function Workout() {
  return (
    <div className="homeWorkout">
      {/* table for workout */}
      <table>
        <tr className="homeWorkout__header">
          <th className="homeWorkout__headerLeft">Type</th>
          <th className="homeWorkout__headerRight">Workouts</th>
        </tr>
        <tbody>
          <tr className="homeWorkout__row">
            <div>
              <td className="homeWorkout__cellHeader">Stretches</td>
            </div>
            <div>
              <td className="homeWorkout__cell">Lunge Spinal Twist</td>
              <td className="homeWorkout__cell">Seated leg over</td>
              <td className="homeWorkout__cell">Tricept over Head</td>
              <td className="homeWorkout__cell">Figure Four</td>
              <td className="homeWorkout__cell">90/90</td>
              <td className="homeWorkout__cell">Frog</td>
              <td className="homeWorkout__cell">Butterfly</td>
              <td className="homeWorkout__cell">Seated Shoulder Squeeze</td>
              <td className="homeWorkout__cell">Side Bend</td>
              <td className="homeWorkout__cell">Lunge Hip Flexor</td>
            </div>
          </tr>
          <tr className="homeWorkout__row">
            <div>
              <td className="homeWorkout__cellHeader">Stretches</td>
            </div>
            <div>
              <td className="homeWorkout__cell">Knee to Chest</td>
              <td className="homeWorkout__cell">Lying Quad</td>
              <td className="homeWorkout__cell">Leg Swings</td>
              <td className="homeWorkout__cell">Pretzel</td>
              <td className="homeWorkout__cell">Plank Walk Outs</td>
              <td className="homeWorkout__cell">Arm Circles</td>
              <td className="homeWorkout__cell">Toe Touches</td>
              <td className="homeWorkout__cell">Standing Toe Touches</td>
              <td className="homeWorkout__cell">Butt Kicks</td>
              <td className="homeWorkout__cell">Squat Walks</td>
            </div>
          </tr>
          <tr className="homeWorkout__row">
            <div>
              <td className="homeWorkout__cellHeader">circuit</td>
            </div>
            <div  >
              <td className="homeWorkout__cell">jump rope</td>
              <td className="homeWorkout__cell">jumping Jacks</td>
              <td className="homeWorkout__cell">walking Jacks</td>
              <td className="homeWorkout__cell">Burpees</td>
              <td className="homeWorkout__cell">Mountain Climbers</td>
              <td className="homeWorkout__cell">Stairs</td>
              <td className="homeWorkout__cell">Sprints</td>
              <td className="homeWorkout__cell">high Knees</td>
              <td className="homeWorkout__cell">Push Ups</td>
              <td className="homeWorkout__cell">Squats</td>
            </div>
          </tr>
          <tr className="homeWorkout__row">
            <div>
              <td className="homeWorkout__cellHeader">Knees over Toes</td>
            </div>
            <div>
              <td className="homeWorkout__cell">Ass to Grass </td>
              <td className="homeWorkout__cell">Toe crunches</td>
              <td className="homeWorkout__cell">1 legged calf raises</td>
              <td className="homeWorkout__cell">1 legged squats</td>
              <td className="homeWorkout__cell">Treadmill Backwards walk</td>
              <td className="homeWorkout__cell"></td>
              <td className="homeWorkout__cell"></td>
              <td className="homeWorkout__cell"></td>
              <td className="homeWorkout__cell"></td>
              <td className="homeWorkout__cell"></td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Workout;