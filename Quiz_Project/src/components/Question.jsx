import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import question from "../question.js";
export default function Question({ onSkipUser, index, onSelect }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const handleAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: question[index].answers[0] === answer,
      });
    }, 1000);

    setTimeout(() => {
      onSelect(answer);
    }, 2000);
  };
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipUser : null}
        mode={answerState}
      />
      <h2>{question[index].text}</h2>
      <Answers
        Selectanswer={answer.selectedAnswer}
        answers={question[index].answers}
        answerState={answerState}
        onSelectAns={handleAnswer}
      />
    </div>
  );
}
