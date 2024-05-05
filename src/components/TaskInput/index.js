import { useState } from "react";

import "./index.css";

const TaskInput = (props) => {
    // State to manage the value of the input field
    const [inputValue, setInputValue] = useState('');

    // Destructure addTodo function from props
    const { addTodo } = props;

    // Function to handle input field change
    const onChangeTodo = (event) => {
        setInputValue(event.target.value);
    }

    // Function to handle adding a new todo item
    const onAddTodoButton = (event) => {
        event.preventDefault();

        // Check if input value is empty
        if (inputValue === '') {
            // Display alert if input value is empty
            return alert("Please Enter a Task Name");
        }

        // Call addTodo function with input value
        addTodo(inputValue);
        
        // Reset input value after adding todo
        setInputValue('');
    }

    // Render the input field and add button inside a form
    return (
        <form onSubmit={onAddTodoButton}>
         
            <input 
                value={inputValue} 
                type="text" 
                id="todoUserInput" 
                className="todo-user-input" 
                placeholder="What needs to be done?" 
                onChange={onChangeTodo} 
            />
            <button type="submit" className="add-todo-button">Add</button>
        </form>
    );
}

export default TaskInput;
