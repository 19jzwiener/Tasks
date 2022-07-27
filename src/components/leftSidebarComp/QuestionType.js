import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

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
  const [addIndex2, setAddIndex2] = useState(0);

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
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-auto bg-light sticky-top">
          <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            {type.map((questionType, index) => {
              return (
                <div className="d-block p-3 link-dark text-decoration-none ">
                  <i
                    class="bi-bootstrap fs-1 button"
                    onClick={() => setAddIndex(index)}
                  >
                    {questionType.typeHeader}
                  </i>
                </div>
              );
            })}
            <div>
              {/* Create new typeHeader */}
              <input
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

        <div class="col-sm p-3 min-vh-100">
          {type[addIndex] &&
            type[addIndex].questions.map((question, index2) => {
              return (
                <div>
                  {/* Take questions stuff from other page */}

                  <div>
                    {index2 !== addIndex2 && (
                      <>
                        {/* Print out each question under the header */}
                        <p>{question}</p>
                        <button
                          className="btn btn-primary"
                          onClick={() => setAddIndex2(index2)}
                        >
                          Open answer sheet
                        </button>
                        {/* LineBreak */}
                        <hr class="my-2" />
                      </>
                    )}
                  </div>

                  {/* Pops out the answer page only if both index's equal the header and question index's */}
                  {index2 == addIndex2 && (
                    <>
                      {/* popout box --> question/textarea/boxAnswer/changeAnswer */}

                      <div className="">
                        <p className="fs-3">{question}</p>
                        <div>
                          {/* area where answer will sit when inputted */}
                          <p className="p-2 bg-light border fs-5">
                            {type[addIndex].answers[index2]}
                          </p>

                          {/* area to input answers */}
                          <div className="d-flex flex-row align-items-center">
                            <input
                              placeholder="Enter Answer"
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
                                  type.slice(addIndex)[0];
                                // push type info to typeQuestions
                                sectionToChangeAnswerTo.answers[index2] =
                                  answer;

                                // Place new question at end of array
                                setType([
                                  ...type.slice(0, addIndex),
                                  sectionToChangeAnswerTo,
                                  ...type.slice(addIndex + 1),
                                ]);
                                setAnswer("");
                              }}
                            >
                              Change
                            </button>
                          </div>
                          {/* LineBreak */}
                          <hr class="my-2" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default QuestionType;
