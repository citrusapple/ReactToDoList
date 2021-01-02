import TodoItems from './TodoItems'
import todoData from './TodoData'
function ToDoList(){
    const todoComponents = todoData.map(item => <TodoItems key ={item.id} things = {item} />)
    return (
        <div>
            {todoComponents}
        </div>
    )
}

export default ToDoList;