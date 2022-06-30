import React, { useState } from "react";
import { Link } from "react-router-dom"

import QuestionType from "./QuestionType";

import "./Sidebar.css";

function Sidebar() {

  return (
    <div className="app">
       <div className="sidebar">
      <div className="sidebar__box">
        {/* This will change into a hyperlink to switch pages */}
        {/* top header section for page */}
        <Link  to="/" >Home</Link>
      </div>

      <div className="sidebar__lineBreak" />

      {/* allows for creation of new questions and header to be placed on sidebar */}
      <QuestionType />

    </div>
    </div>
   
  );
}

export default Sidebar;
