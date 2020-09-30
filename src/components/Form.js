import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Form =  ({ inputText,setInputText,selectedDate,setSelectedDate,todos,setTodo,setState }) => {
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    const submitButtonHandler = (e) => {
      e.preventDefault();
      if(inputText.length > 0){
        setTodo([
          ...todos, {text: inputText,timeStamp: selectedDate ,date: selectedDate.toString().substring(4,15), time: selectedDate.toString().substring(15,21), completed: false, id: Math.random() *1000}
        ]);
        setInputText("");
        setSelectedDate("");
    }};
    const statusHandler = (e) => {
      setState(e.target.value);
    };
    return (
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <DatePicker value={selectedDate} selected={selectedDate} onChange={date => setSelectedDate(date)} className="datePicker" showTimeSelect timeFormat="HH:mm"/>
      <button onClick={submitButtonHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange = {statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;