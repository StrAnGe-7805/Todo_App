import React , {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText , setInputText] = useState("");
  const [selectedDate , setSelectedDate] = useState("");
  const [todos , setTodo] = useState([]);
  const [state , setState] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  } , []);
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos,state]);
  const filteredHandler = () => {
    switch(state) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      setTodo(JSON.parse(localStorage.getItem('todos')));
    }
  };
  return (
    <div className="App">
      <header>
  <h1>My Todo's</h1>
      </header>
      <Form setState = {setState} inputText={inputText} selectedDate={selectedDate} setSelectedDate={setSelectedDate} todos={todos} setTodo={setTodo} setInputText={setInputText}/>
      <TodoList setInputText={setInputText} setSelectedDate={setSelectedDate} filteredTodos = {filteredTodos} setTodo = {setTodo} todos={todos}/>
    </div>
  );
}
export default App;