import classes from '../CSS/TodoItem.module.css'
export default function TodoItem({item, todoId, clickHandler}) {
  
  return (
    <div className={` ${classes['todoItem-container']} ${todoId === item.id ? classes['todoItem-container-click'] : null}`} onClick={() => {clickHandler(item.progress, item.id)}}>
        <h3>{item.title}</h3>
        <p>{item.progress}</p>
    </div>
  )
}
