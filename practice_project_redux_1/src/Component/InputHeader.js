import { useRef } from "react"
import { addTodo, deleteItem } from "../store/todo"
import { useDispatch } from "react-redux"
import classes from '../CSS/InputHeader.module.css'


export default function InputHeader({todoId, todoStatus, setTodoState}) {
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
        setTodoState('', 0)
    }

    const deleteTodoHandler = () => {
        dispatch(deleteItem({status: todoStatus, id: todoId}))
        setTodoState('', 0)
    }

    const cancelHandler = () => {
        setTodoState('', 0)
    }
    return (
        <header className={classes['header-container']}>
            <input type='text' ref={todoInputRef}/>
            <button onClick={addTodoHandler}>추가하기</button>
            <button onClick={deleteTodoHandler} style={{visibility: todoId ? 'visible' : 'hidden'}}>삭제하기</button>
            <button onClick={cancelHandler} style={{visibility: todoId ? 'visible' : 'hidden'}}>취소</button>
        </header>
    )
}