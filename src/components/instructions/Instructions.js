import React, { useContext } from "react";
import ContextHook from "../context/ContextHook";
import "./instructions.scss";
const Instructions = () => {
  const { setQuizStarted, setActivety, setTimerBorder } =
    useContext(ContextHook);
  const startingQuiz = () => {
    setQuizStarted(true);
    setActivety(true);
    setTimerBorder(true);
  };
  return (
    <div className="instructions">
      <h2>Quiz instructions</h2>
      <h4>Note the following</h4>
      <ul>
        <li>Total 20 questions are asked.</li>
        <li>Questions about evaluation of english knowledge</li>
        <li>Each question carries four answers</li>
        <li>The quiz will take 10 minutes, but you can take less time</li>
      </ul>

      <article>
        The quizzes consists of questions carefully designed to help you
        self-assess your comprehension of the information presented on the
        topics covered in the module. No data will be collected on the website
        regarding your responses or how many times you take the quiz.
      </article>
      <button onClick={startingQuiz}>
        {/* START Is had Been Written By CSS */}
      </button>
    </div>
  );
};
export default Instructions;
