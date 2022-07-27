import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
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
  );
}

export default Navbar;
