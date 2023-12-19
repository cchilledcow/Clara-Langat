import React, { useState } from "react";
import "./Quiz.css";
import quizDataAdvanced from "../api/QuizdataAdvanced";

function QuizAdvanced() {
  const [displayQuestion, setDisplayQuestion] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [amountCorrect, setAmountCoreect] = useState(0);
  const [showResult, setShowResults] = useState(false);
  const [result, setResult] = useState(0);
  const [clickable, setClickable] = useState(true);

  const handleBackBtn = () => {
    if (displayQuestion >= 1) {
      setDisplayQuestion(displayQuestion - 1);
      setDisplayAnswer(false);
      setAnswerCorrect(false);
      console.log(displayQuestion);
    }
  };

  const handleNextBtn = () => {
    if (displayQuestion < quizDataAdvanced.questions.length - 1) {
      setDisplayQuestion(displayQuestion + 1);
      setDisplayAnswer(false);
      setAnswerCorrect(false);
      setClickable(true);
      console.log(displayQuestion);
    } else {
      setShowResults(true);
      setResult((amountCorrect / quizDataAdvanced.questions.length) * 100);
    }
  };

  const handleAnswer = (index) => {
    if (quizDataAdvanced.questions[displayQuestion].correctAnswerIndex == index) {
      console.log("%cCorrect!", "background-color: green");
      setDisplayAnswer(!displayAnswer);
      setAnswerCorrect(true);
      setAmountCoreect(amountCorrect + 1);
      setClickable(false);
    } else {
      console.log("%cWrong!", "background-color: red");
      setDisplayAnswer(!displayAnswer);
      setClickable(false);
    }
    console.log("clicked");
  };

  const reset = () => {
    setDisplayQuestion(0);
    setDisplayAnswer(false);
    setAnswerCorrect(false);
    setAmountCoreect(0);
    setShowResults(false);
    setResult(0);
    setClickable(true);
  };

  return (
    <div className="quiz-container">
      <h1>Cyber Security quiz</h1>

      {!showResult ? (
        <React.Fragment>
          <h2>
            Question(
            <span style={{ color: "#4cceac" }}>{displayQuestion + 1}</span>/
            {quizDataAdvanced.questions.length}){" "}
          </h2>

          <div className="quiz-options">
            <h2 className="question">
              {" "}
              {quizDataAdvanced.questions[displayQuestion].question}
            </h2>

            {quizDataAdvanced.questions[displayQuestion].answers.map(
              (answer, index) => {
                return (
                  <button
                    key={index}
                    className="quiz-options-container"
                    disabled={!clickable}
                    onClick={() => handleAnswer(index)}
                  >
                    <h3
                      style={
                        displayAnswer &&
                        quizDataAdvanced.questions[displayQuestion]
                          .correctAnswerIndex == index
                          ? { color: "#4cceac" }
                          : displayAnswer &&
                            quizDataAdvanced.questions[displayQuestion]
                              .correctAnswerIndex !== index
                          ? { color: "#db4f4a" }
                          : null
                      }
                    >
                      {answer}
                    </h3>
                  </button>
                );
              }
            )}
          </div>

          {displayAnswer && answerCorrect ? (
            <h2 style={{ color: "#4cceac" }}>Correct!</h2>
          ) : (
            displayAnswer &&
            !answerCorrect && <h2 style={{ color: "#db4f4a" }}>Wrong!</h2>
          )}

          <div className="quiz-nav">
            <button onClick={handleBackBtn}>Prev</button>
            <button onClick={handleNextBtn}>Next</button>
          </div>
        </React.Fragment>
      ) : (
        <div className="results-container">
          <h1> Result </h1>

          <div
            className="result-container"
            style={
              result > 50
                ? { border: "3px solid #4cceac", boxShadow: "0,0,1rem #4cceac" }
                : { border: "3px solid #db4f4a", boxShadow: "0,0,1rem #db4f4a" }
            }
          >
            <h1
              style={result > 50 ? { color: "4cceac" } : { color: "#db4f4a" }}
            >
              {result.toFixed(1)}%
            </h1>
          </div>
          <button onClick={reset}>Try again</button>
        </div>
      )}
    </div>
  );
}

export default QuizAdvanced;
