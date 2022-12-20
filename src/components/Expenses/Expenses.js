import "./Expenses.css";

import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData);
    console.log(enteredFilterData);
  };

  function ExpenseItemHelper(i) {
    return (
      <ExpenseItem
        title={props.expenses[i].title}
        amount={props.expenses[i].amount}
        date={props.expenses[i].date}
      ></ExpenseItem>
    );
  }
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {ExpenseItemHelper(0)}
      {ExpenseItemHelper(1)}
      {ExpenseItemHelper(2)}
      {ExpenseItemHelper(3)}
    </div>
  );
}

export default Expenses;
