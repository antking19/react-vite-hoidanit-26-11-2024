const TodoNew = (props) => {
    console.log(">>> Check props: ", props);
    const { addNewTodo } = props;
    addNewTodo("eric");
    return (
        <div className="todo-new">
            <input type="text" placeholder="Enter your task" />
            <button className="btn btn-primary">Add</button>
        </div>
    );
};

export default TodoNew;
