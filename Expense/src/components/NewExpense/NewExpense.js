import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {
  const savechangehandler = (newexpensedata) => {
    const newvalues = {
      id: Math.random().toString(),
      ...newexpensedata,
    };
    props.onAddexpense(newvalues);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onsavechange={savechangehandler} />
    </div>
  );
};
export default NewExpense;
