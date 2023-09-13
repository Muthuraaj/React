import React from "react";
import { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [EnteredTitle, SetEnterredTitle] = useState("");
  const TitleChangeHandler = (event) => {
    SetEnterredTitle(event.target.value);
  };
  const [EnteredAmount, SetAmount] = useState("");
  const AmountChanger = (event) => {
    SetAmount(event.target.value);
  };
  const [EnteredDate, SetDate] = useState("");
  const DateChanger = (event) => {
    SetDate(event.target.value);
  };

  const Submithandler = (event) => {
    const newData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    event.preventDefault();
    props.onsavechange(newData);
    SetEnterredTitle("");
    SetAmount("");
    SetDate("");
  };
  return (
    <form onSubmit={Submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={EnteredAmount}
            onChange={AmountChanger}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={DateChanger}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
