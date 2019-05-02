import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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
        id: '',
        completed: false
      }
    };
  }

  newTodo = event => {
    console.log(event.target.name);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value,
        id: Date.now()
      }
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todosOnState: [...this.state.todosOnState, this.state.todo],
      todo: {
        task: ''
      }
    })
    
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList list={this.state.todosOnState}/>
        <TodoForm 
            todo={this.state.todo}
            newTodo={this.newTodo} 
            addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
