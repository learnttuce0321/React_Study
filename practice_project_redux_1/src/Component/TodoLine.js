import TodoItem from "./TodoItem"
import classes from '../CSS/TodoLine.module.css'

export default function TodoLine({statusName, status, clickHandler}) {
    return (
        <div>
            <h1 className={classes['todoLine-name']}>{statusName}</h1>
            <div className={classes['todoLine']}>
            <h1></h1>
                {
                    status.map((item) => {
                    return (
                        <TodoItem item={item} key={item.id} clickHandler={clickHandler}/>
                    )
                    })
                }
            </div>
        </div>
    )
}