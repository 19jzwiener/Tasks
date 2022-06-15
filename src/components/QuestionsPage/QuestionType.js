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

  const [answer, setAnswer] = useState("");

  // UseState for index
  const [addIndex, setAddIndex] = useState(0);

  const [addIndex2, setAddIndex2] = useState(null);

  useEffect(() => {
    const data = window.localStorage.getItem("TYPE_INFO");
    if (data !== null) setType(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("TYPE_INFO", JSON.stringify(type));
  }, [type]);

  function deleteTypeHeader(i) {
    console.log(JSON.parse(window.localStorage.getItem("TYPE_INFO"))[i]);

    setType([...type.slice(0, i), ...type.slice(i + 1)]);
  }

  return (
    <div className="type">
      <div>
        {type.map((questionType, index) => {
          return (
            <article>
              <div className="question__box">
                <div className="question__header">
                  <p className="question__type">
                    {questionType.typeHeader} questions
                  </p>
                </div>

                {index == addIndex ? (
                  <>
                    {" "}
                    {questionType.questions.map((question, index2) => {
                      return (
                        // Take questions stuff from other page
                        <div className="question__box">
                          <p className="question__question">{question}</p>
                          <button className="question__btn" onClick={() => setAddIndex2(index2)}>
                            Open {question} answer sheet
                          </button>

                          {index == addIndex && index2 == addIndex2 && (
                            <>
                              <div className="question__personalBox">
                                <p>{question}</p>
                                <div className="question__innerBox">
                                  <textarea
                                    className="question__personalBoxAnswer"
                                    type="text"
                                    placeholder="Enter your answer..."
                                    value={questionType.answers[index2]}
                                    onChange={(e) => console.log(e)}
                                  />
                                  <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                  />

                                  <button
                                    onClick={() => {
                                      let sectionToChangeAnswerTo =
                                        type.slice(index)[0];
                                      // push type info to typeQuestions
                                      sectionToChangeAnswerTo.answers[index2] =
                                        answer;

                                      // Place new question at end of array
                                      setType([
                                        ...type.slice(0, index),
                                        sectionToChangeAnswerTo,
                                        ...type.slice(index + 1),
                                      ]);
                                      setAnswer("");
                                    }}
                                  >
                                    Change Answer
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                    <div>
                      <button  className="question__Addbtn" onClick={() => deleteTypeHeader(index)}>
                        delete question type
                      </button>

                      <>
                        {/* Add questions to specific questionType */}
                        <input
                          type="text"
                          name="TypeQuestion"
                          value={typeQuestions}
                          onChange={(e) => setTypeQuestions(e.target.value)}
                        />
                        <button
                          className="question__Addbtn"
                          onClick={() => {
                            // Make sure question isn't empty
                            if (typeQuestions.length) {
                              let sectionToAddQuestionTo = type.slice(index)[0];
                              // push type info to typeQuestions
                              sectionToAddQuestionTo.questions.push(
                                typeQuestions
                              );

                              sectionToAddQuestionTo.answers.push("");

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
                          Add Question
                        </button>
                      </>
                    </div>
                  </>
                ) : (
                  <button className="question__btn" onClick={() => setAddIndex(index)}>
                    Open Questions
                  </button>
                )}
              </div>
              <div className="question__lineBreak" />
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
            className="question__Addbtn"
            onClick={() => {
              // make sure typeHeader isn't empty
              if (typeHeader.length) {
                // take current header list and add new header
                setType([
                  ...type,
                  {
                    // typeHeader = typeHeader from useState
                    typeHeader: typeHeader,
                    // create new questions array
                    questions: [],
                    // Create new answers array
                    answers: [],
                  },
                ]);
                // reset typeHeader to blank
                setTypeHeader("");
              }
            }}
          >
            Add Header
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionType;
