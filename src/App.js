import React from "react";
import ReactDOM from "react-dom/client";

import QuestionType from "./components/leftSidebarComp/QuestionType";
import Task from "./components/leftSidebarComp/Task";
import Weather from "./components/leftSidebarComp/Weather";
import Workout from "./components/leftSidebarComp/Workout";
import Navbar from "./components/leftSidebarComp/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // File where pages are placed once finished
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/Questions" element={<QuestionType />} />
          <Route path="/Todo" element={<Task />} />
          <Route path="/Workout" element={<Workout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
