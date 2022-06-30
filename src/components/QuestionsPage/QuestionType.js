import React, { useEffect, useState } from "react";

import "./QuestionType.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function QuestionType() {
  // List of all types of questions
  const [type, setType] = useState([]);

  // UseState to create more types
  const [typeHeader, setTypeHeader] = useState("");

  // UseState to create questions under each type
  const [typeQuestions, setTypeQuestions] = useState("");

  // UseState for new answers
  const [answer, setAnswer] = useState("");

  // UseState for index --> 0 places first question set to be open right away
  const [addIndex, setAddIndex] = useState(0);

  // UseState for index2 --> null leaves it closed until someone opens up a question inside QuestionType
  const [addIndex2, setAddIndex2] = useState(null);

  // Saves all questions and questionTypes into localStorage
  useEffect(() => {
    const data = window.localStorage.getItem("TYPE_INFO");
    if (data !== null) setType(JSON.parse(data));
  }, []);

  // Allows for adding or deleting questionTypes and then resaves into localStorage
  useEffect(() => {
    window.localStorage.setItem("TYPE_INFO", JSON.stringify(type));
  }, [type]);

  // delete questionType
  function deleteTypeHeader(i) {
    console.log(JSON.parse(window.localStorage.getItem("TYPE_INFO"))[i]);

    setType([...type.slice(0, i), ...type.slice(i + 1)]);
  }

  return (
    <div className="type">
      <div>
        {/* looping through each of the questionTypes */}
        {type.map((questionType, index) => {
          return (
            <article>
              <div className="question__box">
                <div className="question__header">
                  <p className="question__type">
                    {/* Shows each header on the page */}
                    {questionType.typeHeader} 
                  </p>
                </div>

                {/* hides questions under each header until addIndex is equal to set index */}
                {index == addIndex ? (
                  <>
                    {/* Loop through questions under a header */}
                    {questionType.questions.map((question, index2) => {
                      return (
                        // Take questions stuff from other page
                        <div className="question__box">
                          {/* Print out each question under the header */}
                          <p className="question__question">{question}</p>
                          <button
                            className="btn btn-primary"
                            onClick={() => setAddIndex2(index2)}
                          >
                            Open answer sheet  
                          </button>

                          {/* Pops out the answer page only if both index's equal the header and question index's */}
                          {index == addIndex && index2 == addIndex2 && (
                            <>
                              {/* popout box --> question/textarea/boxAnswer/changeAnswer */}
                              <div className="question__personalBox">
                                <p>{question}</p>
                                <div className="question__innerBox">
                                  {/* area where answer will sit when inputted */}
                                  <textarea
                                    className="question__personalBoxAnswer"
                                    type="text"
                                    placeholder="Enter your answer..."
                                    value={questionType.answers[index2]}
                                    onChange={(e) => console.log(e)}
                                  />
                                  {/* area to input answers */}
                                  <input
                                  className="input-group"
                                    type="text"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                  />

                                  {/* button to input answer */}
                                  <button
                                  className="btn btn-success"
                                  
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
                      {/* delete whole header and question type */}
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTypeHeader(index)}
                      >
                        delete question type
                      </button>

                      <>
                        {/* Add questions to specific questionType */}
                        <input
                        className="input-group"
                          type="text"
                          name="TypeQuestion"
                          value={typeQuestions}
                          onChange={(e) => setTypeQuestions(e.target.value)}
                        />
                        <button
                          className="btn btn-success "
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
                  // Button that changes addIndex so that a specific header and questions would be open
                  <button
                    className="btn btn-info btn-lg"
                    onClick={() => setAddIndex(index)}
                  >
                    Open Questions
                  </button>
                )}
              </div>
              <div className="question__lineBreak" />
            </article>
          );
        })}

        <div>
          {/* Create new typeHeader */}
          <input
          className="input-group"
            type="text"
            name="typeHeader"
            value={typeHeader}
            onChange={(e) => setTypeHeader(e.target.value)}
          />
          {/* Creates new QuestionType/Header for new questions to be underneath */}
          <button
            className="btn btn-success "
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
