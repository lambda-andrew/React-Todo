// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList (props) {
    return(
        <div className='todoList'>
            {props.list.map(todo => (
                <Todo task={todo}/>
            ))}
        </div>
    );
}

export default TodoList;