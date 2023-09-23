export default function TodoItem({item, clickHandler}) {
  
  return (
    <div style={{width: '100%', margin: '15px'}} onClick={() => {clickHandler(item.progress, item.id)}}>
        <h3 style={{width: '100%'}}>{item.title}</h3>
        <p style={{width: '100%'}}>{item.progress}</p>
    </div>
  )
}
