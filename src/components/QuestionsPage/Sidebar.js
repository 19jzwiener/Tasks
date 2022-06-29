import React, { useState } from "react";

import QuestionType from "./QuestionType";

import "./Sidebar.css";

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebar__box">
        {/* This will change into a hyperlink to switch pages */}
        {/* top header section for page */}
        <div>Home</div>
      </div>

      <div className="sidebar__lineBreak" />

      {/* allows for creation of new questions and header to be placed on sidebar */}
      <QuestionType />

    </div>
  );
}

export default Sidebar;
