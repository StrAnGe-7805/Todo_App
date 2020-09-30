import React from 'react';
import Todo from './Todo';

const TodoList = ({ filteredTodos , setTodo , todos , setInputText , setSelectedDate }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setInputText={setInputText} setSelectedDate={setSelectedDate} setTodo = {setTodo} todos = {todos} key = {todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;