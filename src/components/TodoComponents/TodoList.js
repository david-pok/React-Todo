import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //   console.log("todolistPROPS", props);
  return (
    <div className="shopping-list">
      {props.list.map(item => (
        <Todo
          key={item.key}
          id={item.id}
          task={item.task}
          completed={item.completed}
          toggleItem={props.toggleItem}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
