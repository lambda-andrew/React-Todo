import React from 'react';
import './Todo.css';


class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input
          name="task"
          value={this.props.task}
          onChange={this.props.input}
          placeholder="Todo Item"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm
