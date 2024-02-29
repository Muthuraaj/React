import quizComplete from "../assets/quiz-complete.png";
import question from "../question";
export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((answer) => answer === null);
  const correctAns = userAnswers.filter(
    (answer, index) => answer === question[index].answers[0]
  );
  const skippedShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );
  const correctAnsShare = Math.round(
    (correctAns.length / userAnswers.length) * 100
  );
  const wrongShare = 100 - skippedShare - correctAnsShare;

  return (
    <div id="summary">
      <img src={quizComplete} alt="trpoy" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">answered wrongly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === question[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h2>{index + 1}</h2>
              <p className="question">{question[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
