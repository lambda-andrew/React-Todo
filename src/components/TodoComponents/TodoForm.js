import React from 'react';

const TodoForm = props => {
    return(
        <form className='todoForm' onSubmit={props.addTodo}>
            <input 
                name='task' 
                onChange={props.newTodo} 
                value={props.todo.task}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;