import "./Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";

function Expenses(props) {
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
      {ExpenseItemHelper(0)}
      {ExpenseItemHelper(1)}
      {ExpenseItemHelper(2)}
      {ExpenseItemHelper(3)}
    </div>
  );
}

export default Expenses;
