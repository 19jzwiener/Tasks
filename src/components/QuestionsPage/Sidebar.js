import React, { useState } from "react";

import QuestionType from "./QuestionType";
import Personal from "./Personal";

import "./Sidebar.css";

function Sidebar() {
  const [answerOpen, setAnswerOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__box">
        {/* This will change into a hyperlink to switch pages */}
        <div>Home</div>
      </div>

      <div className="sidebar__lineBreak" />
      <div className="sidebar__box">
        <div className="sidebar__header">
          <h4 className="sidebar__questions">Personal Questions</h4>
          <button className="sidebar__btnSmall">ADD</button>
        </div>
        <button
          className="sidebar__btn"
          
        >
          Question1
        </button>
        <button className="sidebar__btn">Question2</button>
        <input className="questions__input" type="text"></input>
      </div>

      <div className="sidebar__lineBreak" />

      <QuestionType />

    </div>
  );
}

export default Sidebar;
