import { useState, useEffect } from "react";

import "./Task.css";

import { Link } from "react-router-dom";

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
    setTasks([...tasks.slice(0, i), ...tasks.slice(i + 1)]);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Workout" className="nav-link active">
                  Workout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Todo" className="nav-link active">
                  Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Questions" className="nav-link active">
                  Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="card background">
            <div className="card-body py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i className="fas fa-check-square me-1"></i>
                <u>My Todo-s</u>
              </p>

              {/* Input new task */}
              <div class="d-flex flex-row align-items-center">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Add new..."
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                {/* Button to submit new task into list */}
                <button
                  type="button"
                  className="btn btn-primary"
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
                  Add
                </button>
              </div>

              {/* Line Break */}
              <hr class="my-4" />

              <div>
                {/* loop through all tasks */}
                {tasks.map((task, index) => {
                  return (
                    <div>
                      {" "}
                      <ul class="list-group list-group-horizontal rounded-0">
                        <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                          <div class="form-check">
                            <input
                              class="form-check-input me-0"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked2"
                              aria-label="..."
                            />
                          </div>
                        </li>
                        {/* Show task */}
                        <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                          <p class="lead fw-normal mb-0">{task.description}</p>
                        </li>
                        <li>
                          {/* Delete a task */}
                          <button
                            // Need to find
                            className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent"
                            onClick={() => deleteTask(index)}
                          >
                            x
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
