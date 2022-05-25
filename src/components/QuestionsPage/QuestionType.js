import React, { useState } from "react";

import Personal from "./Personal";

import "./QuestionType.css";

function QuestionType() {
  const [answerOpen, setAnswerOpen] = useState(false);

  return (
    <div className="type">
      <div className="sidebar__box">
        <div className="sidebar__header">
          <input
            className="sidebar__headerInput"
            type="text"
            placeholder="Enter Type of Questions"
          />
          <button className="sidebar__btnSmall">ADD</button>
        </div>
        <div>
          <input
            className="sidebar__btn"
            type="text"
            placeholder="Enter Question"
          />
          <button
          className="sidebar__btnSmall"
            onClick={() => {
              setAnswerOpen(!answerOpen);
            }}
          >
            Personal
          </button>
        </div>

        <button className="sidebar__btn">Question2</button>
      </div>
      <div className="sidebar__lineBreak" />

      {answerOpen ? (
        <div>
          <Personal />
        </div>
      ) : null}
    </div>
  );
}

export default QuestionType;
