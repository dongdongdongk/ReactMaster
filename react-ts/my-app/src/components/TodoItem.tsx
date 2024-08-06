import classes from "./TodoItem.module.css"

type TodoText = {
    text: string;
    onRemoveTodo : (event:React.MouseEvent) => void
}

const TodoItem: React.FC<TodoText> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
}

export default TodoItem