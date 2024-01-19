import { useEffect } from "react";
import { useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainTime] = useState(timeout);
  useEffect(() => {
    console.log("Set Timeout");

    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);
  useEffect(() => {
    console.log("Set Interval");
    const interval = setInterval(() => {
      setRemainTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}