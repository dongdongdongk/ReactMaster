import './App.css';
import Todo from './models/todo';
import Todos from './components/Todos';

function App() {
  const todos = [
    new Todo('리액트 배우기 '),
    new Todo('타입 스크립트 배우기 ')
  ]
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
