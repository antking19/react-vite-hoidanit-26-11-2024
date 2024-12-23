const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo("eric");
    const handleClick = () => {
        alert("click me");
    };

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    };

    return (
        <div class="todo-new">
            <input
                className="todo-input"
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button class="btn btn-info" onClick={handleClick}>
                Add
            </button>
        </div>
    );
};

export default TodoNew;
