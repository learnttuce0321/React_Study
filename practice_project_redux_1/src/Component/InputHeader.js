import { useRef } from "react"
import { addTodo } from "../store/todo"
import { useDispatch } from "react-redux"

export default function InputHeader() {
    const todoInputRef = useRef()
    const dispatch = useDispatch()
     
    const addTodoHandler = () => {
        const todoInput = todoInputRef.current


        if(todoInput.value.length === 0) {
            todoInput.focus();
            return;
        }
            
        dispatch(addTodo({title: todoInput.value}))
        todoInput.value = ''
    }

    return (
        <header>
            <input type='text' ref={todoInputRef}/>
            <button onClick={addTodoHandler}>추가하기</button>
        </header>
    )
}