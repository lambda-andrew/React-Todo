import React from 'react';
import './Todo.css'

function Todo (props) {
    return (
        <div 
            className={`item ${props.todo.completed ? "completed" : null}`}
            onClick={() => props.completed(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    );
}

export default Todo;