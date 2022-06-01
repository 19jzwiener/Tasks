import React, { useEffect, useState } from "react";

import Personal from "./Personal";

import "./QuestionType.css";

function QuestionType() {
  // List of all types of questions
  const [type, setType] = useState([]);

  // UseState to create more types
  const [typeHeader, setTypeHeader] = useState("");

  // UseState to create questions under each type
  const [typeQuestions, setTypeQuestions] = useState("");

  // UseState for index --> will be added later
  const [addIndex, setAddIndex] = useState(null);

  useEffect(() => {
    const data = window.localStorage.getItem("TYPE_INFO");
    if (data !== null) setType(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("TYPE_INFO", JSON.stringify(type));
  }, [type]);

  return (
    <div className="type">
      <div>
        {type.map((questionType, index) => {
          return (
            <article>
              <div className="sidebar__box">
                <div className="sidebar__header">
                  <p>{questionType.typeHeader} questions</p>
                </div>
                {questionType.questions.map((question, index) => {
                  return (
                    // Take questions stuff from other page
                    <div>{question}</div>
                  );
                })}
                <div>
                  <button>delete question type</button>
                  {index == addIndex ? (
                    <>
                      {/* Add questions to specific questionType */}
                      <input
                        type="text"
                        name="TypeQuestion"
                        value={typeQuestions}
                        onChange={(e) => setTypeQuestions(e.target.value)}
                      />
                      <button
                        onClick={() => {
                          // Make sure question isn't empty
                          if (typeQuestions.length) {
                            let sectionToAddQuestionTo = type.slice(index)[0];
                            // push type info to typeQuestions
                            sectionToAddQuestionTo.questions.push(
                              typeQuestions
                            );
                            // Place new question at end of array
                            setType([
                              ...type.slice(0, index),
                              sectionToAddQuestionTo,
                              ...type.slice(index + 1),
                            ]);
                            // reset description to blank
                            setTypeQuestions("");
                          }
                        }}
                      >
                        Enter Question
                      </button>
                    </>
                  ) : (
                    <button onClick={() => setAddIndex(index)}>
                      Add Question
                    </button>
                  )}
                </div>
              </div>
              <div className="sidebar__lineBreak" />
            </article>
          );
        })}

        <div>
          <input
            type="text"
            name="typeHeader"
            value={typeHeader}
            onChange={(e) => setTypeHeader(e.target.value)}
          />
          <button
            className=""
            onClick={() => {
              // make sure typeHeader isn't empty
              if (typeHeader.length) {
                // take current header list and add new header
                setType([
                  ...type,
                  {
                    // Still don't quite understand ask Ben or Preston
                    typeHeader: typeHeader,
                    // create new questions array
                    questions: [],
                  },
                ]);
                // reset typeHeader to blank
                setTypeHeader("");
              }
            }}
          >
            Enter Header Cell
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionType;
