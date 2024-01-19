import { useState, useEffect } from "react";
export default function ProgressBar({ Timer }) {
  const [remainingTime, setRemainingTime] = useState(Timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevtime) => prevtime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={Timer} />;
}
