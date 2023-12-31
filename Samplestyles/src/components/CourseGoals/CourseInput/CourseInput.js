import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";
const Formdiv = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color:${(props) => (props.invalid ? "red" : "black")}
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
      background-color:${(props) =>
        props.invalid ? "rgb(212, 135, 135)" : "transparent"};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  
  `;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, Setvalid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      Setvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      Setvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Formdiv invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </Formdiv>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
