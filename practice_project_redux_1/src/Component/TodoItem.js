import classes from '../CSS/TodoItem.module.css'
export default function TodoItem({item, clickHandler}) {
  
  return (
    <div className={classes['todoItem-container']}onClick={() => {clickHandler(item.progress, item.id)}}>
        <h3>{item.title}</h3>
        <p>{item.progress}</p>
    </div>
  )
}
