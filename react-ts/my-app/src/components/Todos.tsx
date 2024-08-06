import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

type TodosProps = {
    items: Todo[];
};

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text}/>
            ))}
        </ul>
    );
};

export default Todos;