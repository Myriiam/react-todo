import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const Form = ({todos, setTodos}) => {
  const [inputValue, setInputValue] = useState("");
  const clickHandler = () => {
    if (inputValue != "") {
      setTodos([
        ...todos,
        { id: uuidv4(), status:false, task: inputValue }
      ]);
    } else {
      alert("You need to enter a task !");
    }
  
    setInputValue("");
  }

  return (
    <div className="form" id="add-task">
      <input 
        className="text-input" 
        id="add-task-input" 
        type="text" 
        placeholder="Write a new todo" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <input 
        className="button-input" 
        id="submit-input" 
        type="button" 
        value="Add Todo" 
        onClick={clickHandler}
      /> 
    </div>
  )
};

export default Form