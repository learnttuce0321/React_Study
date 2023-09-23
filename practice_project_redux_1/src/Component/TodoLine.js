import TodoItem from "./TodoItem"
export default function TodoLine({status, clickHandler}) {
    return (
        <div style={{width: '30%', height: '80vh', border: '1px solid black', borderRadius: '1rem'}}>
            {
                status.map((item) => {
                return (
                    <TodoItem item={item} key={item.id} clickHandler={clickHandler}/>
                )
                })
            }
        </div>
    )
}