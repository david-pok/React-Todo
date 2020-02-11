import React, { Component } from 'react';

class TodoForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      // [e.target.name]: e.target.value
      newTodo: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;