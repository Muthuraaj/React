import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredyear, setfilter] = useState("2022");
  const filterchange = (seleceted) => {
    setfilter(seleceted);
  };
  const filteredexpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredyear} onChangeFilter={filterchange} />
      {filteredexpense.length === 0 && (
        <h2 id="fallbacktitle">No Expense Found</h2>
      )}
      <ExpenseChart expenses={filteredexpense} />

      {filteredexpense.length > 0 &&
        filteredexpense.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
