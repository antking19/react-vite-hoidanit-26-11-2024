const TodoNew = (props) => {
    console.log(">>> check point: ", props);
    const { addNewTodo } = props;
    // addNewTodo("eric");
    return (
        <div class="todo-new">
            <input className="todo-input" type="text" />
            <button class="btn btn-info">Add</button>
        </div>
    );
};

export default TodoNew;
