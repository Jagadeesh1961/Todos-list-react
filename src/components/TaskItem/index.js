import { MdDelete } from "react-icons/md";

import "./index.css";

const TaskItem = (props) => {
    const { taskItem, toggleCheckItem, deleteTodoItem } = props;

    // Destructure properties from taskItem
    const { isChecked, id, text } = taskItem;

    // Determine the class name for the label based on isChecked
    const labelClassName = isChecked ? "checkbox-label checked" : "checkbox-label";

    // Function to handle clicking on the checkbox
    const onClickCheckItem = () => {
        toggleCheckItem(id);
    }

    // Function to handle deleting a todo item
    const onDeleteTodo = () => {
        deleteTodoItem(id);
    }

    // Render each task item
    return (
        <li className="todo-item-container">
            {/* Checkbox input */}
            <input 
                className="checkbox-input" 
                type="checkbox" 
                id={id} 
                onClick={onClickCheckItem} 
                checked={isChecked} 
            />
            {/* Task label */}
            <div className="label-container">
                <label className={labelClassName} htmlFor={id}>
                    {text}
                </label>
                {/* Delete icon */}
                <div className="delete-icon-container">
                    <MdDelete className="delete-icon" onClick={onDeleteTodo} />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;
