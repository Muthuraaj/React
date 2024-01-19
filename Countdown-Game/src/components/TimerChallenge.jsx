import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeremaining] = useState(targetTime * 1000);
  //   const [startTimer, setStartTimer] = useState(false);
  //   const [endTimer, setEndtimer] = useState(false);
  const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeremaining(targetTime * 1000);
  }
  const handleClick = () => {
    timer.current = setInterval(() => {
      setTimeremaining((prevtime) => prevtime - 10);
      //   setEndtimer(true);
      //   dialog.current.open();
    }, 10);
    // setStartTimer(true);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        result={timeRemaining}
        target={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsactive ? handleStop : handleClick}>
            {timerIsactive ? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsactive ? "actvie" : undefined}>
          {timerIsactive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
