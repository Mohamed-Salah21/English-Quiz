import React, { useContext, useEffect } from "react";
import ContextHook from "../context/ContextHook";
import "./questions-range.scss";
const QuestionsRange = () => {
  const {
    current,
    timer,
    setTimer,
    isActive,
    questionsData,
    timerBorder,
    clicked,
  } = useContext(ContextHook);
  useEffect(() => {
    const counting =
      timer > 0 && isActive && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counting);
  }, [timer, isActive, setTimer]);
  return (
    <div className="questions-range">
      <div className="elements">
        <p>
          Questions {current}/{questionsData.length}
        </p>
        <div className="range">
          <div style={{ width: `${current * 5}%` }}></div>
        </div>
      </div>
      <div
        className={`timer 
        ${timer < 9 && "animated-alert"}
        ${(timer < 1 && "timer-stoped") || (clicked && "timer-stoped")} 
        ${timerBorder && "timer-border"} 
        `}
      >
        <span>00:{timer < 10 ? `0${timer}` : timer} </span>
        <div
          className={`border-top ${timerBorder && "timer-border"} `}
          style={{ width: timer < 24 && "calc(100% + 2px)" }}
        ></div>
        <div
          className="border-right"
          style={{ height: timer < 18 && "calc(100% + 2px)" }}
        ></div>
        <div
          className="border-bottom"
          style={{ width: timer <= 9 && "calc(100% + 2px)" }}
        ></div>
        <div
          className="border-left"
          style={{ height: timer < 2 && "calc(100% + 2px)" }}
        ></div>
      </div>
    </div>
  );
};
export default QuestionsRange;
