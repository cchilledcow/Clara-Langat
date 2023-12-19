import React, { useState } from "react";
import quizData from "../api/QuizData";
import "./Quiz.css";

function Quiz() {
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
    if (displayQuestion < quizData.questions.length - 1) {
      setDisplayQuestion(displayQuestion + 1);
      setDisplayAnswer(false);
      setAnswerCorrect(false);
      setClickable(true);
      console.log(displayQuestion);
    } else {
      setShowResults(true);
      setResult((amountCorrect / quizData.questions.length) * 100);
    }
  };

  const handleAnswer = (index) => {
    if (quizData.questions[displayQuestion].correctAnswerIndex == index) {
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
            {quizData.questions.length}){" "}
          </h2>

          <div className="quiz-options">
            <h2 className="question">
              {" "}
              {quizData.questions[displayQuestion].question}
            </h2>

            {quizData.questions[displayQuestion].answers.map(
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
                        quizData.questions[displayQuestion]
                          .correctAnswerIndex == index
                          ? { color: "#4cceac" }
                          : displayAnswer &&
                            quizData.questions[displayQuestion]
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

export default Quiz;
