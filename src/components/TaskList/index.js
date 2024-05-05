import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./index.css";
import TaskInput from "../TaskInput";
import TaskItem from "../TaskItem";

// Function to get todosList from local storage
const getLocalItems = () => {
    let list = localStorage.getItem('todosList');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem("todosList"));
    }
    else{
        return [];
    }
}

const TaskList = () => {
    // State to manage the list of todos
    const [todosList, setTodosList] = useState(getLocalItems());

    // Effect hook to update local storage when todosList changes
    useEffect(() => {
        localStorage.setItem("todosList", JSON.stringify(todosList));
    }, [todosList]);

    // Function to add a new todo item
    const addTodo = (inputValue) => {
        setTodosList([...todosList, {
            id: uuid(),
            text: inputValue,
            isChecked: false
        }]);
    };

    // Function to toggle the checked state of a todo item
    const toggleCheckItem = (id) => {
        setTodosList(todosList.map(eachTodo => eachTodo.id === id ? {...eachTodo, isChecked: !eachTodo.isChecked } : eachTodo));
    };

    // Function to delete a todo item
    const deleteTodoItem = (id) => {
        setTodosList(todosList.filter(eachTodo => eachTodo.id !== id));
    };

    // Render the TaskList component
    return (
        <div className="todos-bg-container">
            <div className="bgs">
                <div className="todo-top-container">
                    <img src="https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=996&t=st=1714830595~exp=1714831195~hmac=dcbdcee4df5086bbf4c90d38de1a7165c3f101c34ce04cf05cf323b7469ec9f4" alt="todo-pic" className="todo-bg-image"/>
                    <h1 className="todos-heading">Todos</h1>
                </div>
                <h1 className="create-task-heading">
                    Create <span className="create-task-heading-subpart">Task</span>
                </h1>
                <TaskInput addTodo={addTodo} />
                <h1 className="todo-items-heading">
                    My <span className="todo-items-heading-subpart">Tasks</span>
                </h1>
                <ul className="todo-items-container" id="todoItemsContainer">
                    {/* Mapping over todosList to render each todo item */}
                    {todosList.map(eachTodo => (
                        <TaskItem
                            key={eachTodo.id}
                            taskItem={eachTodo}
                            toggleCheckItem={toggleCheckItem}
                            deleteTodoItem={deleteTodoItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;
