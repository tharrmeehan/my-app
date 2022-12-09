import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "i1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 12),
    },
    {
      id: "i2",
      title: "Table",
      amount: 2341,
      date: new Date(2022, 2, 12),
    },
    {
      id: "i3",
      title: "Chair",
      amount: 541.67,
      date: new Date(2020, 2, 12),
    },
    {
      id: "i4",
      title: "Lamp Ariel",
      amount: 531,
      date: new Date(2019, 2, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
