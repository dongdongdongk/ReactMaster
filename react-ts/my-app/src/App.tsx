import './App.css';
import { useState } from 'react';
import Todo from './models/todo';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  // todos 배열을 useState로 관리
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('리액트 배우기'),
    new Todo('타입스크립트 배우기')
  ]);

  return (
    <TodosContextProvider>
      <NewTodo  />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
