import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  const ChartdataPoints = [
    { label: "jan", value: "0" },
    { label: "feb", value: "0" },
    { label: "mar", value: "0" },
    { label: "apr", value: "0" },
    { label: "may", value: "0" },
    { label: "jun", value: "0" },
    { label: "jul", value: "0" },
    { label: "aug", value: "0" },
    { label: "sep", value: "0" },
    { label: "oct", value: "0" },
    { label: "nov", value: "0" },
    { label: "dec", value: "0" },
  ];
  for (const datapoints of props.expenses) {
    const expensemonth = datapoints.date.getMonth();
    ChartdataPoints[expensemonth].value = datapoints.amount;
  }
  return <Chart dataPoints={ChartdataPoints} />;
};

export default ExpenseChart;
