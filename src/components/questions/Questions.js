import React, { Fragment, useContext, useEffect, useState } from "react";
import ContextHook from "../context/ContextHook";
import "./questions.scss";
const Questions = ({ setResults }) => {
  const {
    setCurrent,
    current,
    setTimer,
    setTimerBorder,
    setActivety,
    timer,
    questionsData,
    clicked,
    setClicked,
    setTotalTime,
    totalTime,
    setCorrectScore,
    setIncorrectScore,
    correctScore,
    incorrectScore,
    responsingSeconds,
  } = useContext(ContextHook);

  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(null);

  const choosingAnswer = (button) => {
    setActivety(false);
    setClicked(true);
    setTimerBorder(false);
    if (!clicked) {
      if (selected === button) setSelected(null);
      setSelected(button);
      setTotalTime([...totalTime, responsingSeconds - timer]);
      setSelected(button);
      button.isCorrect
        ? setCorrectScore((score) => score + 1)
        : setIncorrectScore((score) => score + 1);
    }
  };
  const moveToNextQuestion = () => {
    setTimer(responsingSeconds);
    setClicked(false);
    setActivety(true);
    setHover(false);
    setTimerBorder(true);
    setCurrent(current + 1);
  };
  const handleMouseOver = () => {
    clicked || timer < 1 ? setHover(true) : setHover(false);
  };
  useEffect(() => {
    if (timer < 1) {
      setIncorrectScore((score) => score + 1);
      setTotalTime([...totalTime, responsingSeconds]);
      setTimerBorder(false);
    }
  }, [
    timer,
    setIncorrectScore,
    responsingSeconds,
    setTotalTime,
    setTimerBorder,
  ]);
  const QuestionsDataFiltered = questionsData.filter(
    (list) => list.id === current
  );
  return (
    <div className="questions-wrapper">
      {QuestionsDataFiltered.map((el) => {
        return (
          <Fragment key={el.id}>
            <div className="question">
              <h3> {el.question} </h3>
            </div>
            <div className="answers">
              {el.answers.map((button) => {
                return (
                  <button
                    disabled={timer < 1}
                    key={button.id}
                    onClick={() => choosingAnswer(button)}
                    className={`
                    ${
                      selected === button &&
                      clicked &&
                      button.isCorrect &&
                      "valid-answer"
                    } 
                    ${
                      selected === button &&
                      clicked &&
                      !button.isCorrect &&
                      "invalid-answer"
                    } 
                    ${timer < 1 && "disabled"}
                    `}
                  >
                    {button.answer}
                  </button>
                );
              })}
            </div>
          </Fragment>
        );
      })}
      <div className="buttons-and-icons">
        {current !== questionsData.length ? (
          <button
            disabled={!clicked && timer > 0}
            className={`next-question-button ${hover && "effect"} `}
            onClick={moveToNextQuestion}
            onMouseOver={handleMouseOver}
            onMouseLeave={() => setHover(false)}
          >
            Next
          </button>
        ) : (
          <div
            className={`result-btn 
            ${clicked && timer >= 1 && "showing"} 
            ${!clicked && timer < 1 && "showing"}  
            `}
          >
            <button onClick={() => setResults(true)}>click here</button>
            <span>to see your result</span>
          </div>
        )}
        <div className="result-marks">
          <div>
            <i className="fas fa-badge-check"></i>
            <span> {correctScore} </span>
          </div>
          <div>
            <i className="fas fa-times-hexagon"></i>
            <span> {incorrectScore} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
