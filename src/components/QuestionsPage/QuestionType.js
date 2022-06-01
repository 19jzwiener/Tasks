import React, { useState } from "react";

import Personal from "./Personal";

import "./QuestionType.css";

function QuestionType() {
  const [answerOpen, setAnswerOpen] = useState(false);



  const [type, setType] = useState([
    "Motivational" ,
     "Personal" 
  ]);

  return (
    <div className="type">
     

      <div>
        {type.map((questionType, index) => {
          return (
            <article >
              <div className="sidebar__box">
                <div className="sidebar__header">
                  <p>{questionType} questions</p>
                  <button className="sidebar__btnSmall">ADD</button>
                </div>
                <button onClick={() => {
                  setAnswerOpen(!answerOpen)}} >Open</button>
                
              </div>
              <div className="sidebar__lineBreak" />
            </article>
          );
        })}
      </div>

      {answerOpen ? (
        <div>
          <Personal info={type} />
        </div>
      ) : null}
    </div>
  );
}

export default QuestionType;
