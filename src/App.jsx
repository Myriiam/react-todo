import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'


const LSKEY = "MyTodoApp";
const itemFromLocalStorage = JSON.parse(window.localStorage.getItem(LSKEY + ".todos") || "[]")
console.log(itemFromLocalStorage)
function App() {
  const name ="allTasks";
  const [todos, setTodos] = useState(itemFromLocalStorage);
 
  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]); 

  return (
    <>
      <div className="container">
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <List nbElements={20} name={name} todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
