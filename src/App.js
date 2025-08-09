import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import './App.css';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [task, setTask] = useState({});
 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
     <Header/>
     <AddTask todos={todos} setTodos={setTodos} task={task} setTask={setTask}/>
     <TaskList todos={todos} setTodos={setTodos} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
