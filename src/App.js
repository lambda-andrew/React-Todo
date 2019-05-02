import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todosOnState: todos,
      todo: {
        task: '',
      }
    };
  }

  newTodo = event => {
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value,
      }
  })}

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todosOnState: [...this.state.todosOnState, newTodo],
      todo: {
        task: ''
      }
  })}

  completed = todoId => {
    this.setState({
      todosOnState: this.state.todosOnState.map(todo => {
        if(todoId === todo.id){
          return{
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      }) 
    })
  }

  clear = event => {
    event.preventDefault();
    this.setState({
      todosOnState: this.state.todosOnState.filter(todo => {
        return !todo.completed;
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to Your Todo App!</h2>

        <TodoList 
            list={this.state.todosOnState}
            completed={this.completed}
          />
        <TodoForm 
            todo={this.state.todo}
            newTodo={this.newTodo} 
            addTodo={this.addTodo}
            clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
