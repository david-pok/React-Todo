import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
    // we don't need this if we use arrow functions
    // this.toggleItem = this.toggleItem.bind(this);
  }

  // Class methods to update state
  toggleItem = clickedId => {
    // no mutating the current state
    // for every array and every object - create a new one (..., or array methods)
    const newTodoList = this.state.todoList.map(todo => {
      // loop through the array
      // find the todo we clicked (id, maybe index)
      // toggle that todo's completed property
      if (todo.id === clickedId) {
        // toggle completed
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    // Update state with the new array
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = () => {
    const newList = this.state.todoList.filter(
      todo => todo.completed === false
    );
    this.setState({
      todoList: newList
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          list={this.state.todoList}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
