import React from 'react';
import './TodoListItem.css'

const TodoListItem = ({item, dispatch}) => {

    return (
        item.isVisible
            ?   <div className="todoList-item" id={item.id}>
                    <button className="todoList-item-complete" onClick={() => dispatch ({
                        type: "completeTodo",
                        payload: item.id
                    })}>
                        {item.isCompleted
                            ? <img className="todoList-item-complete-img" src="./source/checkmark.png" alt="checkmark.png"/>
                            : ''
                        }
                    </button>
                    <input
                        className={item.isCompleted ? "todoList-item-input completed" : "todoList-item-input"}
                        type="text" value={item.value} disabled={true}/>
                    <button className="todoList-item-delete" onClick={() => dispatch ({
                        type: "deleteTodo",
                        payload: item.id
                    })}>
                        <img className="todoList-item-delete-img" src="./source/remove.png" alt="remove.png"/>
                    </button>
                </div>
            : ''
    )
}

export default TodoListItem;
