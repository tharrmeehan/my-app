import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" step="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
