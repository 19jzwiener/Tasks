import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import Questions from './components/QuestionsPage/Sidebar'
import Task from './components/leftSidebarComp/Task';
import Weather from './components/leftSidebarComp/Weather';
import Workout from './components/leftSidebarComp/Workout';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/Questions" element={<Questions />} />
            <Route path="/Todo" element={<Task />} />
            <Route path="/Workout" element={<Workout />} />
        </Routes>
    </Router>
);

