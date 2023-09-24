import './App.css';
import { changeToInProgress, changeToCompleted, changeToTodo } from './store/todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeStatusButton from './Component/ChangeStatusButton';
import TodoLine from './Component/TodoLine';
import InputHeader from './Component/InputHeader';

function App() {

  const [todoId, setTodoId] = useState(0)
  const [todoStatus, setTodoStatus] = useState('')

  const dispatch = useDispatch()
  const {todo, inProgress, completed} = useSelector(state => state.todo)
 

  const setTodoState = (status, id) => {
    setTodoStatus(status)
    setTodoId(id)
  }

  const clickHandler = (status, id) => {
    setTodoState(status, id)
  }

  const clickToInProgressHandler = () => {
    dispatch(changeToInProgress({status: todoStatus, id: todoId}))
    setTodoState('', 0)
  }
  const clickToCompletedHandler = () => {
    dispatch(changeToCompleted({status: todoStatus, id: todoId}))
    setTodoState('', 0)
  }
  const clickToTodoHandler = () => {
    dispatch(changeToTodo({status: todoStatus, id: todoId}))
    setTodoState('', 0)
  }

  return (
    <>
      <InputHeader todoId={todoId} todoStatus={todoStatus} setTodoState={setTodoState} />
      <div style={{display: 'flex', justifyContent:'space-evenly', padding: '2rem', width: '100vw'}}> 

        <TodoLine statusName={'todo'} status={todo} clickHandler={clickHandler} todoId={todoId} />
        
        <ChangeStatusButton plusStatusHandler={clickToInProgressHandler} plusState={'inProgress'} minusStatusHandler={clickToTodoHandler} minusState={'todo'} todoStatus={todoStatus} />

        <TodoLine statusName={'inProgress'} status={inProgress} clickHandler={clickHandler} todoId={todoId} />

        <ChangeStatusButton plusStatusHandler={clickToCompletedHandler} plusState={'completed'} minusStatusHandler={clickToInProgressHandler} minusState={'inProgress'} todoStatus={todoStatus} />

        <TodoLine statusName={'completed'} status={completed} clickHandler={clickHandler} todoId={todoId} />

      </div>
      
      
    </>
  );
}

export default App;
