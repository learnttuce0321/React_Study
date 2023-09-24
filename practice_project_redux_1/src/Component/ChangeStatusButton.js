import classes from '../CSS/ChangeStatusButton.module.css'

export default function ChangeStatusButton({plusStatusHandler, plusState, minusStatusHandler, minusState, todoStatus}) {
    return (
        <div className={classes['button-container']}>
            <button onClick={plusStatusHandler} style={{visibility: todoStatus ===  minusState ? 'visible' : 'hidden'}}> + </button>
            <button onClick={minusStatusHandler} style={{visibility: todoStatus === plusState ? 'visible' : 'hidden'}}> - </button>
        </div>
    )
}