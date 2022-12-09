import React from 'react';
import './TodoList.css'
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoListCompleteAll from "../TodoListCompleteAll/TodoListCompleteAll";

const TodoList = ({todos, dispatch}) => {

    return (
        <div className="todoList-wrapper">
            <TodoListCompleteAll todos={todos} dispatch={dispatch}/>
            <ul className="todoList-body">
                {todos.map((item) =>
                    <TodoListItem item={item} dispatch={dispatch} key={item.id}/>
                )}
            </ul>
            <TodoListFooter todos={todos} dispatch={dispatch}/>
        </div>
    )
}

export default TodoList;
