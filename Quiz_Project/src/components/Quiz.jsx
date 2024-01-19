import { useState, useCallback, useRef } from "react";
import question from "../question";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question";

export function Quiz() {
  //   const [activeQuesIndx, setActivequeIndx] = useState(0);
  const [answerState, setAnswerState] = useState("");

  const [storeAns, SetStoreans] = useState([]);
  const activeQuesIndx =
    answerState === "" ? storeAns.length : storeAns.length - 1;
  const handleUsers = useCallback(function handleUsers(selectAnswer) {
    SetStoreans((prevans) => [...prevans, selectAnswer]);
    setAnswerState("answered");

    setTimeout(() => {
      if (selectAnswer === question[activeQuesIndx].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  }, []);
  const handleSkipUser = useCallback(() => handleUsers(null), [handleUsers]);
  const quizCompleted = activeQuesIndx === question.length;
  if (quizCompleted) {
    // console.log("exec..", activeQuesIndx, question.length);
    return (
      <div id="summary">
        <img src={quizComplete} alt="trpoy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        answerState={answerState}
        answers={question[activeQuesIndx].answers}
        handleUsers={handleUsers}
        onSkipUser={handleSkipUser}
        questionText={question[activeQuesIndx].text}
        selectanswer={storeAns[storeAns.length - 1]}
        key={activeQuesIndx}
      />
    </div>
  );
}
