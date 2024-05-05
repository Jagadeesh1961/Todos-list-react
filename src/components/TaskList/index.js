import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./index.css";
import TaskInput from "../TaskInput";
import TaskItem from "../TaskItem";


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
    const [todosList, setTodosList] = useState(getLocalItems());


    useEffect(() => {
        localStorage.setItem("todosList", JSON.stringify(todosList));
    }, [todosList]);

    const addTodo = (inputValue) => {
        setTodosList([...todosList, {
            id: uuid(),
            text: inputValue,
            isChecked: false
        }]);
    };

    const toggleCheckItem = (id) => {
        setTodosList(todosList.map(eachTodo => eachTodo.id === id ? {...eachTodo, isChecked: !eachTodo.isChecked } : eachTodo));
    };

    const deleteTodoItem = (id) => {
        setTodosList(todosList.filter(eachTodo => eachTodo.id !== id));
    };

    return (
        <div className="todos-bg-container">
            <div className="bgs">
                <div className="todo-top-container">
                    <img src = "https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=996&t=st=1714830595~exp=1714831195~hmac=dcbdcee4df5086bbf4c90d38de1a7165c3f101c34ce04cf05cf323b7469ec9f4"  alt="todo-pic" className="todo-bg-image"/>
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
