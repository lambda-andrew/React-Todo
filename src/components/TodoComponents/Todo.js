import React from 'react';
import './Todo.css';


const Todo = (props) => {
  return (
    <div>
      <p>
        {props.todoTask.task}
      </p>
    </div>
  );
}

export default Todo
