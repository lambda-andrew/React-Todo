import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';


class TodoList extends React.Component {
  render() {
    return (
      <div>
        <TodoForm input={this.props.input} task={this.props.task} submit={this.props.submit}/> {
          this.props.stateTodoList.map(todoTask => (
          <Todo todoTask={todoTask} />
            )
          )
        }
      </div>
    );
  }
}

export default TodoList
