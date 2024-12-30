const TodoNew = (props) => {
    console.log(">>> Check props: ", props);
    const { addNewTodo } = props;
    // addNewTodo("eric");
    const handleClick = () => {
        alert("click me");
    };

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
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
        </div>
    );
};

export default TodoNew;
