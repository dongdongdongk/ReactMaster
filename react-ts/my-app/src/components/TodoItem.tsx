type TodoText = {
    text: string;
}

const TodoItem: React.FC<TodoText> = (props) => {
    return <li>{props.text}</li>
}

export default TodoItem