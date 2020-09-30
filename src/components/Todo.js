import React from 'react';

const Todo = ({ setInputText , setSelectedDate , setTodo , todos , todo }) => {
    const completeHandler = () => {
        setTodo(todos.map((item) => {
            if(item.id === todo.id)
            {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };
    const deleteHandler = () => {
        setTodo(todos.filter((el) => el.id !== todo.id));
    };
    const editHandler = () => {
        todos.map((item) => {
        if(item.id === todo.id)
        {
            setInputText(todo.text);
            setSelectedDate(todo.timeStamp);
        }
        return item;
        });
        setTodo(todos.filter((el) => el.id !== todo.id));
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <div className={`datePicker ${todo.completed ? "completed" : ""}`}>{todo.date} <br />{todo.time}</div>
            <button onClick={completeHandler} className={`${todo.completed ? "close-btn" : "complete-btn"}`}><i className={`fas ${todo.completed ? "fa-times" : "fa-check"}`}></i></button>
            <button onClick={editHandler} className="edit-btn"><i className="fas fa-edit"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;
