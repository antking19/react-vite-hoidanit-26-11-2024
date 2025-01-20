const TodoData = (props) => {
    const { todoList } = props;
    console.log(">>> Check props: ", todoList);
    return (
        <div className="todo-data">
            {todoList.map(() => {
                return <div className="todo-item">hoidanit</div>;
            })}
            <div className="todo-item">
                <div>Learning React</div>
                <div className="todo-button">
                    <div className="todo-delete">Delete</div>
                    <div className="todo-edit">Edit</div>
                </div>
            </div>
            <div className="todo-item">
                <div>Watching TV</div>
                <div className="todo-button">
                    <div className="todo-delete">Delete</div>
                    <div className="todo-edit">Edit</div>
                </div>
            </div>
            <div className="todo-item">
                <div>Playing Football</div>
                <div className="todo-button">
                    <div className="todo-delete">Delete</div>
                    <div className="todo-edit">Edit</div>
                </div>
            </div>
            <div>{JSON.stringify(todoList)}</div>
        </div>
    );
};

export default TodoData;
