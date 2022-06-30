import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Questions from './components/QuestionsPage/Sidebar'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Questions" element={<Questions />} />
        </Routes>
    </Router>
);

