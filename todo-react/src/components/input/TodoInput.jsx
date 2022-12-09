import React from 'react';
import './TodoInput.css'

const TodoInput = ({value, setValue, addTodo}) => {

    return (
        <div className="input-wrapper">
            <input className="input-body"
                   type="text"
                   value={value}
                   placeholder="What needs to be done?"
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={e => e.key === 'Enter' && addTodo(value)}
            />
        </div>
    )
}

export default TodoInput;
