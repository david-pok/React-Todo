import React from "react";
import "./Todo.css";

const Todo = props => {
    console.log("single TODO", props);
  return (
    <div
      onClick={() => props.toggleItem(props.id)}
      className={`todo${props.completed ? " purchased" : ""}`}
    >
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
