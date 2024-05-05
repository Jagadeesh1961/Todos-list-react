import { MdDelete } from "react-icons/md";

import "./index.css"

const TaskItem = (props) => {
    const {taskItem,toggleCheckItem,deleteTodoItem} = props;
    const {isChecked,id, text}  = taskItem;
    const labelClassName = isChecked ? "checkbox-label checked" : "checkbox-label"

    const onClickCheckItem = ()=>{
        toggleCheckItem(id)
    }
    const onDeleteTodo = () => {
        deleteTodoItem(id)
    }
    return (
        <li className="todo-item-container">
            <input className="checkbox-input" type="checkbox" id = {id} onClick={onClickCheckItem} checked={isChecked}/>
            <div className="label-container">
                <label className={labelClassName} htmlFor={id}>{text}</label>
                <div className="delete-icon-container">
                    <MdDelete className="delete-icon" onClick={onDeleteTodo}/>
                </div>
            </div>
        </li>
    )
}

export default TaskItem