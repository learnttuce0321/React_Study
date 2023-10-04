import classes from '../CSS/ChangeStatusButton.module.css'
import btnClasses from '../CSS/Button.module.css'
import { changeToInProgress, changeToCompleted, changeToTodo } from '../store/todo';
import { setTodoState } from '../store/clickedItem';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function ChangeStatusButton({plus, minus, children}) {

    const dispatch = useDispatch()
    const { todoId, todoStatus } = useSelector(state => state.clickedItem)
    const plusVisibilityStatus = todoStatus ===  minus ? {visibility: 'visible'} : {visibility: 'hidden'}
    const minusVisibilityStatus = todoStatus === plus ? {visibility: 'visible'} : {visibility: 'hidden'}
    const clickToTodoHandler = async () => {
        try {
                await axios({
                method: 'PATCH',
                url: `todo/${todoId}/todo`
            })
            dispatch(changeToTodo({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }
    }
    const clickToInProgressHandler = async () => {
        try {
            await axios({
                method: 'PATCH',
                url: `todo/${todoId}/inProgress`
            })
            dispatch(changeToInProgress({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }   
    }
    const clickToCompletedHandler = async () => {

        try {
                await axios({
                method: 'PATCH',
                url: `todo/${todoId}/completed`
            })
            dispatch(changeToCompleted({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }
    }
    
    const selectPlusClickHandler = () => {
        if(plus === 'inProgress') {
            return clickToInProgressHandler
        } else if (plus === 'completed') {
            return clickToCompletedHandler
        }
    }
    const selectMinusClickHandler = () => {
        if(minus === 'todo') {
            return clickToTodoHandler
        } else if (minus === 'inProgress') {
            return clickToInProgressHandler
        }
    }

    return (
        
        <div className={classes['button-container']}>
            <button onClick={selectPlusClickHandler()} style={plusVisibilityStatus} className={btnClasses.progressButton}>
                <FontAwesomeIcon icon={faArrowRight} size="2xs" />
            </button>
            <button onClick={selectMinusClickHandler()} style={minusVisibilityStatus} className={btnClasses.progressButton}>
                <FontAwesomeIcon icon={faArrowLeft} size="2xs" />
            </button>
        </div>
    )
}
