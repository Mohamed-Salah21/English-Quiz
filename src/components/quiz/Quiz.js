import React, { Fragment, useState } from "react";
import QuestionsRange from "../questions_range/QuestionsRange";
import Questions from "../questions/Questions";
import Results from "../results/Results";
import "./quiz.scss";
const Quiz = () => {
  const [results, setResults] = useState(false);
  return (
    <div className="quiz">
      {!results ? (
        <Fragment>
          <QuestionsRange />
          <Questions setResults={setResults} />
        </Fragment>
      ) : (
        <Results setResults={setResults} />
      )}
    </div>
  );
};

export default Quiz;
