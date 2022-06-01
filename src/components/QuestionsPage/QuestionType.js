import React, { useState } from "react";

import Personal from "./Personal";

import "./QuestionType.css";

function QuestionType() {



  const [type, setType] = useState([
    "Motivational" 
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
                
              </div>
              <div className="sidebar__lineBreak" />
            </article>
          );
        })}
      </div>

      
    </div>
  );
}

export default QuestionType;
