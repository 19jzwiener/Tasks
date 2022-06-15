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

      <QuestionType />

    </div>
  );
}

export default Sidebar;
