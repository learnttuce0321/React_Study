export default function ChangeStatusButton({plusStatusHandler, plusState, minusStatusHandler, minusState, todoStatus}) {
    return (
        <div>
            <button onClick={plusStatusHandler} style={{visibility: todoStatus ===  minusState ? 'visible' : 'hidden'}}> + </button>
            <button onClick={minusStatusHandler} style={{visibility: todoStatus === plusState ? 'visible' : 'hidden'}}> - </button>
        </div>
    )
}