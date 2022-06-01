import React, { useState } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.css.map";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Update!");
    console.log(title);
  };
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
