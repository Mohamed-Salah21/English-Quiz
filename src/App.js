import React, { useState } from "react";
import Instructions from "./components/instructions/Instructions";
import "./App.scss";
import ContextHook from "./components/context/ContextHook";
import Quiz from "./components/quiz/Quiz";
import api from "./components/questions_api/QuestionsAPI";
const App = () => {
  const [responsingSeconds] = useState(30);
  const [timer, setTimer] = useState(responsingSeconds);
  const [timerBorder, setTimerBorder] = useState(false);
  const [isActive, setActivety] = useState(false);
  const [QuizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(1);
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [totalTime, setTotalTime] = useState([]);
  const [clicked, setClicked] = useState(false);
  const { questionsData } = api;
  return (
    <ContextHook.Provider
      value={{
        setQuizStarted,
        current,
        setCurrent,
        QuizStarted,
        timer,
        setTimer,
        timerBorder,
        setTimerBorder,
        clicked,
        setClicked,
        responsingSeconds,
        isActive,
        setActivety,
        questionsData,
        correctScore,
        setCorrectScore,
        incorrectScore,
        setIncorrectScore,
        totalTime,
        setTotalTime,
      }}
    >
      <div className="App">{QuizStarted ? <Quiz /> : <Instructions />}</div>
    </ContextHook.Provider>
  );
};
export default App;
