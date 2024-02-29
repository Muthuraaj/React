import { useRef } from "react";

export default function Answers({
  answers,
  Selectanswer,
  answerState,
  onSelectAns,
}) {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = Selectanswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAns(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
