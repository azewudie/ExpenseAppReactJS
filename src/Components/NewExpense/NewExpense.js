import React from "react";

import ExpanseForm from "./ExpenseForm";
import "./NewExpense.css";
import ExpenseDate from "../Expenses/ExpenseDate";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpanseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
