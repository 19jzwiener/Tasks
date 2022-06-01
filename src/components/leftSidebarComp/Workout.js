import React from "react";
import { useState, useEffect } from "react";

import "./Workout.css";

function Workout() {
  const [workoutRows, setWorkoutRows] = useState([]);

  // Allow for creation of Workout
  const [descriptionBox, setDescriptionBox] = useState("");

  // Allow for creation of Headers
  const [descriptionHeader, setDescriptionHeader] = useState("");
  
  // ALlow selection of which row we want to add a workout too
  const [addIndex, setAddIndex] = useState(null)

  useEffect(() => {
    const data = window.localStorage.getItem("WORKOUT_ROW_INFO");
    if (data !== null) setWorkoutRows(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "WORKOUT_ROW_INFO",
      JSON.stringify(workoutRows)
    );
  }, [workoutRows]);

  function deleteWorkoutRow(i) {
    console.log(JSON.parse(window.localStorage.getItem("WORKOUT_ROW_INFO"))[i]);

    setWorkoutRows([...workoutRows.slice(0, i), ...workoutRows.slice(i + 1)]);
  }

  return (
    <div className="homeWorkout">
      {/* table for workout */}
      <table>
        <tr className="homeWorkout__header">
          <th className="homeWorkout__headerLeft">Type</th>
          <th className="homeWorkout__headerRight">Workouts</th>
        </tr>
        <tbody>
          {/* Iterating over the entire workoutRows array */}
          {workoutRows.map((row, index) => {
            return (
              <tr className="homeWorkout__row">
                <div>
                  <td className="homeWorkout__cellHeader">
                    {row.descriptionHeader}
                  </td>
                </div>

                {/* Creating new array under row.workouts */}
                {/* Iterating over row.workouts array --> created below!! */}
                {row.workouts.map((workout, index) => {
                  return <td className="homeWorkout__cell">{workout}</td>;
                })}
                <div>
                  <td className="homeWorkout__subDel">
                    <button
                      className="homeWorkout__btn"
                      onClick={() => deleteWorkoutRow(index)}
                    >
                      Delete Row
                    </button>
                    {/* change add workout box depending on what index has been clicked */}
                    {index == addIndex ? (
                      <>
                      {/* Add workouts to specific row */}
                        <input
                          type="text"
                          name="description"
                          value={descriptionBox}
                          onChange={(e) => setDescriptionBox(e.target.value)}
                        />
                        <button
                          className="homeWorkout__btn"
                          onClick={() => {
                            // make sure new workout isn't empty
                            if (descriptionBox.length) {
                              //
                              let rowToAddWorkoutTo = workoutRows.slice(index)[0];
                              //push WorkoutRows information to descriptionBox
                              rowToAddWorkoutTo.workouts.push(descriptionBox);
                              // Place new workout at end of array ---- take workoutRows Array first index
                              setWorkoutRows([
                                ...workoutRows.slice(0, index),
                                rowToAddWorkoutTo,
                                ...workoutRows.slice(index+1)
                              ]);
                              // reset description to blank
                              setDescriptionBox("");
                            }
                          }}
                        >
                          Enter Workout
                        </button>
                      </>
                    ) : (
                      <button onClick={() => setAddIndex(index)}>Add Workout</button>
                    )}
                  </td>
                </div>
              </tr>
            );
          })}

          <div>
            <input
              type="text"
              name="description"
              value={descriptionHeader}
              onChange={(e) => setDescriptionHeader(e.target.value)}
            />
            <button
              className=""
              onClick={() => {
                // make sure descriptionHeader isn't empty
                if (descriptionHeader.length) {
                  // take current task list and add new header at end
                  setWorkoutRows([
                    ...workoutRows,
                    {
                      // ????? set typed info to description
                      descriptionHeader: descriptionHeader,
                      // Create workouts array
                      workouts: [],
                    },
                  ]);
                  // reset description to blank
                  setDescriptionHeader("");
                }
              }}
            >
              Enter Header Cell
            </button>
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default Workout;
