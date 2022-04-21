import { useState, useEffect } from "react";
import "./Task.css";

function Task(props) {
  // holds the list of tasks
  const [tasks, setTasks] = useState([]);

  // sets input to blank
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("TASK_POPOUT_TASKS");
    if (data !== null) setTasks(JSON.parse(data));
  }, []);

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

      setTasks([
        ...tasks.slice(0, i),
        ...tasks.slice(i + 1)
      ])
  }

  const [items, setItems] = useState(tasks);
  const removeItem = (index) => {
    setItems([
      ...items.slice(0,index), 
      ...items.slice(index + 1)
    ])
  }



  return (
    <div className="task">
      {/* header for Task popout */}
      <p className="task__header">Tasks for the day</p>
      {/* linebreak between header and tasks */}
      <div className="task__lineBreak" />
      <div className="task__tasksTable">
        {tasks.map((task, index) => {
          // take task input and add to list
          return (
            <div className="task__tasks">
              <button className="task__btn" onClick={() => deleteTask(index)}>
                x
              </button>
              <p> {task.description} </p>
            </div>
          );
        })}
      </div>
      <div className="task__input">
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="task__btn"
          onClick={() => {
            // make sure todo isn't empty
            if (description.length) {
              // take current task list and add new task at end
              setTasks([
                ...tasks,
                {
                  // ????? set typed info to description
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
