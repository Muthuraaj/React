import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
export default function Question({
  onSkipUser,
  questionText,
  selectanswer,
  answerState,
  handleUsers,
  answers,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipUser} />
      <h2>{questionText}</h2>
      <Answers
        Selectanswer={selectanswer}
        answers={answers}
        answerState={answerState}
        onSelect={handleUsers}
      />
    </div>
  );
}
