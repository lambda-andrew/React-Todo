import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return(
        <form className='todoForm' onSubmit={props.addTodo}>
            <input 
                name='task' 
                onChange={props.newTodo} 
                value={props.todo.task}
            />
            <div className='btns'>
                <button>Add Todo</button>
                <button onClick={props.clear}>Clear Completed</button>
            </div>
        </form>
    );
};

export default TodoForm;