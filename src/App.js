import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoList = [];

class App extends React.Component {
  constructor() {
    super()
      this.state = {
      stateTodoList: todoList,
      task: '',
      id: '',
      completed: '',
    }
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
      let newTodoTask = {
        task: this.state.task,
      }

      this.setState(prevState => {
        return {
          stateTodoList: [...prevState.stateTodoList, newTodoTask],
          task: "",
      }
    });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Todo List: MVP</h1>
          <h4><TodoList input={this.inputHandler} task={this.state.task} submit={this.submitHandler} stateTodoList={this.state.stateTodoList} /></h4>
        </div>
      </div>
    );
  }
}

export default App;
