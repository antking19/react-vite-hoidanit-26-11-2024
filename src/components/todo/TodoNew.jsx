import { useState } from "react";

const TodoNew = (props) => {
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric");

    const { addNewTodo } = props;
    // addNewTodo("eric");
    const handleClick = () => {
        addNewTodo(valueInput);
        console.log(">>> check valueInput: ", valueInput);
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };
    return (
        <div className="todo-new">
            <input
                onChange={(event) => handleOnChange(event.target.value)}
                type="text"
                placeholder="Enter your task"
            />
            <button onClick={handleClick} className="btn btn-primary">
                Add
            </button>
            <div>My text input is = {valueInput}</div>
        </div>
    );
};

export default TodoNew;
