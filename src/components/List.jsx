import React from 'react';


const List = ({todos, setTodos}) => {

    const checkboxHandler = (checkedElement, id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, status: checkedElement }
            } else {
                return todo;
            }
        }))
    }

    return (
    <div>
        <hr/>
        <h2>Todos</h2>
        <ul>
            {todos.map((todo, index) => (
            <li key={index+1}>
                <label>
                    <input 
                        type="checkbox" 
                        value={todo.task} 
                        checked={todo.status} 
                         onChange={e=> {
                            checkboxHandler(e.target.checked, todo.id)
                        }}
                    />
                    {todo.task}
                </label>
            </li>
            ))}
        </ul>
    </div>
)};

export default List