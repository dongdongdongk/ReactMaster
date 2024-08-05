import './App.css';
import { useState } from 'react';
import Todo from './models/todo';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  // todos 배열을 useState로 관리
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('리액트 배우기'),
    new Todo('타입스크립트 배우기')
  ]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
