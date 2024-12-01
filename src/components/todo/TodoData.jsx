const TodoData = (props) => {
    const { name, age, data } = props;
    // console.log(">>> check props: ", props);
    return (
        <div className="todo-data">
            <div className="todo-item">My name is {name}</div>
            <div className="todo-item">Learning React</div>
            <div className="todo-item">Learning React</div>
        </div>
    );
};

export default TodoData;
