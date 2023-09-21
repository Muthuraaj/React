import styles from "./Form.module.css";
import { useState } from "react";
const Form = (props) => {
  const [Currentsaving, setCurrentsaving] = useState("");
  const currentSavinghandler = (e) => {
    setCurrentsaving(e.target.value);
  };
  const [Yearlysaving, setYearlysaving] = useState("");
  const yearlychangeHandler = (e) => {
    setYearlysaving(e.target.value);
  };
  const [expectedInterest, setinterest] = useState("");
  const interesthandler = (e) => {
    setinterest(e.target.value);
  };
  const [duration, setDuration] = useState("");
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  const SubmitHandler = (event) => {
    const newdata = {
      currentsaving: Currentsaving,
      yearlysaving: Yearlysaving,
      interest: expectedInterest,
      duration: duration,
    };
    props.onNewsaving(newdata);
    event.preventDefault();
  };
  const resetHandler = () => {
    props.onNewsaving("");

    setCurrentsaving("");
    setYearlysaving("");
    setinterest("");
    setDuration("");
  };
  return (
    <form onSubmit={SubmitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavinghandler}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlychangeHandler}
            required
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={interesthandler}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationHandler}
            required
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
