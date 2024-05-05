import { useState } from "react"

import "./index.css"

const TaskInput = (props) => {
    const [inputValue, setInputValue] = useState('')

    const {addTodo} = props

    const onChangeTodo = (event) =>{
        setInputValue(event.target.value)
    }

    const onAddTodoButon = (event) => {
        event.preventDefault();

        if(inputValue === ''){
           return  alert("Please Enter a Task Name")
        }

        addTodo(inputValue)
        
        setInputValue('')
    }

    return(
        <form onSubmit={onAddTodoButon}>
            <input value={inputValue} type="text" id="todoUserInput" className="todo-user-input" placeholder="What needs to be done?" onChange={onChangeTodo} />
            <button type="submit" className="add-todo-button">Add</button>
        </form>
    )
       
}
export default TaskInput