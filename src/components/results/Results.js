import "./results.scss";
import React, { useContext } from "react";
import ContextHook from "../context/ContextHook";
const Results = ({ setResults }) => {
  const {
    totalTime,
    correctScore,
    incorrectScore,
    questionsData,
    setCurrent,
    setActivety,
    setCorrectScore,
    setIncorrectScore,
    setTimer,
    setClicked,
    setTimerBorder,
    responsingSeconds,
    setTotalTime,
  } = useContext(ContextHook);
  const totalTimeReduced = totalTime.reduce((a, b) => a + b, 0);
  const minutes = Math.floor((totalTimeReduced % 3600) / 60);
  const seconds = Math.floor((totalTimeReduced % 3600) % 60);
  const restartQuiz = () => {
    setResults(false);
    setCurrent(1);
    setActivety(true);
    setCorrectScore(0);
    setIncorrectScore(0);
    setTimer(responsingSeconds);
    setClicked(false);
    setTimerBorder(true);
    setTotalTime([]);
  };
  return (
    <div className="results">
      <div className="results-introductions">
        <h4> the Results </h4>
        {correctScore !== 0 ? (
          <p>
            {correctScore} of {questionsData.length} questions
            {correctScore === 1 ? " is" : " are"} answered correctly
          </p>
        ) : (
          <p style={{ color: "#f2662c" }}> No, of Correct Answers </p>
        )}
        <h4>
          Your time:
          {seconds >= 10 ? (
            <span>
              0{minutes}:{seconds}
            </span>
          ) : (
            <span>
              0{minutes}:0{seconds}
            </span>
          )}
          <span> Time spent </span>
        </h4>
      </div>
      <div className="over-scores">
        {100 * ((correctScore * 7) / 140) >= 50 ? (
          <span style={{ color: "#99bf47" }}>Passed successfuly</span>
        ) : (
          <span style={{ color: "#f2662c" }}>Failed</span>
        )}
        <span>
          You have reached {correctScore * 7} of 140 points (
          {100 * ((correctScore * 7) / 140)}%)
        </span>
      </div>
      <div className="certificate">
        <header>
          <h4 className="certificate-h4">Your Result</h4>
        </header>
        <div className="item">
          <p> Correct Answers </p>
          <div className="parcent">
            <span>{correctScore * 5}%</span>
            <div
              className="rate"
              style={{ width: `${correctScore * 5}%` }}
            ></div>
          </div>
        </div>
        <div className="item">
          <p> Incorrect Answers </p>
          <div className="parcent">
            <span> {incorrectScore * 5}% </span>
            <div
              className="rate"
              style={{ width: `${incorrectScore * 5}%` }}
            ></div>
          </div>
        </div>
        <div className="item">
          <p> Time Spent </p>
          <div className="parcent">
            <span>{Math.trunc(100 * (totalTimeReduced / 600))}%</span>
            <div
              className="rate"
              style={{
                width: `${Math.trunc(100 * (totalTimeReduced / 600))}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <button onClick={restartQuiz}>
        {/* RESTART QUIZ Is had Been Written By CSS */}
      </button>
    </div>
  );
};

export default Results;
