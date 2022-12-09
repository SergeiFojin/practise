import React from 'react';
import './TodoListCompleteAll.css'

const TodoListCompleteAll = ({todos, dispatch}) => {

    return (
        todos.length
        ?   <button
                className={todos.filter(item => !item.isCompleted).length
                    ? "todoList-complete-all"
                    : "todoList-complete-all active"}
                onClick={() => dispatch ({type: "completeAllTodo"})}
            >
                <img
                    className="todoList-complete-all-img"
                    src="./source/checkAll.png"
                    alt="checkAll.png"
                />
            </button>
        : ''
    )
}

export default TodoListCompleteAll;
