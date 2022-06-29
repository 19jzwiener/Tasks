import { useState, useEffect } from "react";
import "./Task.css";

function Task(props) {
  // holds the list of tasks
  const [tasks, setTasks] = useState([]);

  // sets input to blank
  const [description, setDescription] = useState("");

  // hold tasks inputed in localStorage, so they don't disappear when page is closed and reopenned
  useEffect(() => {
    const data = window.localStorage.getItem("TASK_POPOUT_TASKS");
    if (data !== null) setTasks(JSON.parse(data));
  }, []);

  // resets task storage whenever a new task is created or deleted
  useEffect(
    () => {
      window.localStorage.setItem("TASK_POPOUT_TASKS", JSON.stringify(tasks));
    },
    // run whenever tasks changes or the useEffect runs
    [tasks]
  );

  // Delete task at index i
  function deleteTask(i) {
    console.log(
      JSON.parse(window.localStorage.getItem("TASK_POPOUT_TASKS"))[i]
    );

      // grabs task I want to delete and slices around it to grab all the other items
      setTasks([
        ...tasks.slice(0, i),
        ...tasks.slice(i + 1)
      ])
  }




  return (
    <div className="task">
      {/* header for Task popout */}
      <p className="task__header">Tasks for the day</p>

      {/* linebreak between header and tasks */}
      <div className="task__lineBreak" />

      <div className="task__tasksTable">
        {/* loop through all tasks */}
        {tasks.map((task, index) => {
          return (
            <div className="task__tasks">
              {/* Delete a task */}
              <button className="task__btn" onClick={() => deleteTask(index)}>
                x
              </button>
              {/* Show task */}
              <p> {task.description} </p>
            </div>
          );
        })}
      </div>

      <div className="task__input">
        {/* Input new task */}
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Button to submit new task into list */}
        <button
          className="task__btn"
          onClick={() => {
            // make sure todo isn't empty
            if (description.length) {
              // take current task list and add new task at end
              setTasks([
                ...tasks,
                {
                  // Set task description as the description set in input above
                  description: description,
                },
              ]);
              // reset description to blank
              setDescription("");
            }
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Task;
