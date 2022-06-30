import "./ExpenseItem.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">NTD {props.amount}</div>
      </div>
      <button onClick={clickHandler}>update title</button>
    </Card>
  );
}

export default ExpenseItem;
