import { Fragment } from "react"
import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = (props) => {
    const {deleteTodo,title,tasks,completeTodo}=props
    return (
        <Fragment>
            <h3 className="mt-4">{title}</h3>
            <ul id="pending-list" className="list-group">
                {tasks.map((task,i) => (
                    <TodoItemComponent task={task} key={i} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
                ))}
            </ul>

        </Fragment>
    )
}

export default TodoListComponent