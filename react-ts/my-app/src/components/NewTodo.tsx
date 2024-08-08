import { useRef,useContext } from "react";
import classes from "./NewTodo.module.css"
import { TodosContext } from "../store/todos-context";
// NewTodo 컴포넌트에 전달될 props의 타입을 정의
interface NewTodoProps {
    // onAddTodo는 문자열을 인수로 받고 반환값이 없는 함수 타입임
    onAddTodo: (text: string) => void;
}

// NewTodo 함수형 컴포넌트 정의
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    // useRef 훅을 사용해 input 요소에 접근할 수 있는 참조 객체 생성
    // 초기값은 null로 설정되며, 이후 input 요소가 DOM에 렌더링된 후 참조됨
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    // form 제출 시 호출되는 함수
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault(); // 폼의 기본 동작(페이지 새로고침)을 방지
        handleTodoSubmit(); // 할 일 추가 처리 함수 호출
    };

    // 입력된 텍스트를 읽어와 유효성을 검사하고, 유효하면 상위 컴포넌트로 전달하는 함수
    const handleTodoSubmit = () => {
        // useRef를 통해 참조된 input 요소의 현재 값을 가져옴
        const enteredText = todoTextInputRef.current!.value;

        // 입력된 텍스트가 비어있거나 공백만 있는 경우 에러 처리를 위해 return
        if (enteredText.trim().length === 0) {
            // 필요시 에러 메시지를 출력하거나 다른 처리 가능
            return;
        }

        todosCtx.addTodo(enteredText)
        
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            {/* 텍스트 입력을 위한 label과 input 요소 */}
            <label htmlFor="text">Todo text</label>

            {/* ref 속성을 통해 input 요소에 접근할 수 있는 참조 객체를 연결 */}
            <input type="text" id="text" ref={todoTextInputRef} />

            {/* 할 일 추가 버튼, 클릭 시 폼이 제출되고 submitHandler가 호출됨 */}
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;