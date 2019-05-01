import  './Todo.css' ;
import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

class List extends react.component {
  constructor(){
 
  }
 }

const TodoForm = () => {
  return (
    <div className = "anything">
      <TodoList/>
      <Todo/>
      <button>add</button>
      <button>clear</button>
    </div>
  )
}

export default TodoForm;