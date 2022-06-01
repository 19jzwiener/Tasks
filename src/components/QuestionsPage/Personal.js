import React, { useState, useEffect } from "react";

import "./Personal.css";

function Personal({type}) {

  const [body, setBody] = useState("")

  useEffect(() => {
    const data = window.localStorage.getItem("ANSWER_FOR_QUESTION");
    if (data !== null) setBody(JSON.parse(data));
  }, []);

  useEffect(
    () => {
      window.localStorage.setItem("ANSWER_FOR_QUESTION", JSON.stringify(body));
    },
    // run whenever tasks changes or the useEffect runs
    [body]
  );




  return (
    <div className="personal">
      <header className="personal__header">
        {type.map((person) => {
          
          return <p>{person}</p>
        })}
        <p>hello</p>
      </header>
      <div className="personal__body">
        <textarea
          className="personal__bodyInput"
          type="text"
          placeholder="Enter your answer..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Personal;
