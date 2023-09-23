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
      <InputHeader />
      <div style={{display: 'flex', justifyContent: 'space-between',padding: '2rem'}}> 

        <TodoLine status={todo} clickHandler={clickHandler} />
        
        <ChangeStatusButton plusStatusHandler={clickToInProgressHandler} plusState={'inProgress'} minusStatusHandler={clickToTodoHandler} minusState={'todo'} todoStatus={todoStatus} />

        <TodoLine status={inProgress} clickHandler={clickHandler} />

        <ChangeStatusButton plusStatusHandler={clickToCompletedHandler} plusState={'completed'} minusStatusHandler={clickToInProgressHandler} minusState={'inProgress'} todoStatus={todoStatus} />

        <TodoLine status={completed} clickHandler={clickHandler} />

      </div>
      
      
    </>
  );
}

export default App;
