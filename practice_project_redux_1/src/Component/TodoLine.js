import TodoItem from "./TodoItem"
import classes from '../CSS/TodoLine.module.css'

export default function TodoLine({statusName, status, clickHandler, todoId}) {
    return (
        <div>
            <h1 className={classes['todoLine-name']}>{statusName}</h1>
            <div className={classes['todoLine']}>
            <h1></h1>
                {
                    status.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} todoId={todoId} clickHandler={clickHandler}/>
                    )
                    })
                }
            </div>
        </div>
    )
}