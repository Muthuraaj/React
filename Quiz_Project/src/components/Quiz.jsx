import { useState, useCallback, useRef } from "react";
import question from "../question";
import Question from "./Question";
import Summary from "./Sumarry";

export function Quiz() {
  //   const [activeQuesIndx, setActivequeIndx] = useState(0);
  //   const [answerState, setAnswerState] = useState("");

  const [storeAns, SetStoreans] = useState([]);
  const activeQuesIndx = storeAns.length;
  const handleUsers = useCallback(function handleUsers(selectAnswer) {
    SetStoreans((prevans) => [...prevans, selectAnswer]);
    // setAnswerState("answered");

    // setTimeout(() => {
    //   if (selectAnswer === question[activeQuesIndx].answers[0]) {
    //     setAnswerState("correct");
    //   } else {
    //     setAnswerState("wrong");
    //   }

    //   setTimeout(() => {
    //     setAnswerState("");
    //   }, 2000);
    // }, 1000);
  }, []);
  const handleSkipUser = useCallback(() => handleUsers(null), [handleUsers]);
  const quizCompleted = activeQuesIndx === question.length;
  if (quizCompleted) {
    // console.log("exec..", activeQuesIndx, question.length);
    return <Summary userAnswers={storeAns} />;
  }

  return (
    <div id="quiz">
      <Question
        onSkipUser={handleSkipUser}
        index={activeQuesIndx}
        key={activeQuesIndx}
        onSelect={handleUsers}
      />
    </div>
  );
}
