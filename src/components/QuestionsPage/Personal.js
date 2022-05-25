import React, { useState, useEffect } from "react";

import "./Personal.css";

function Personal() {

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
        <input
          className="personal__headerInput"
          type="text"
          placeholder="Enter your question..."
        />
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
