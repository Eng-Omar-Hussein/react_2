import Styles from "./TodoStyles.module.css";

const TodoItemComponent = (props) => {
    
    const handelDelete=(e)=>{
        props.deleteTodo(parseInt(e.parentElement.parentElement.querySelector("span").innerText.split(".")[0]));
    }
    return (
        <li className={`list-group-item ${props.task.completed ? Styles.completed : ""} ${Styles.background}`} >
            <div className="overflow-hidden">
                <span>
                    {props.task.id}. {props.task.title} - {props.task.dueDate}
                </span>
                <div>
                    <button onClick={()=>props.completeTodo(props.task)} className="btn btn-success btn-sm me-2">
                        {props.task.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                        disabled={props.task.completed ? true : false}
                        className="btn btn-warning btn-sm me-2"
                        onClick={()=>props.editTodo(props.task)}
                    >
                        Edit
                    </button>
                    <button onClick={(e)=>handelDelete(e.target)}className="btn btn-danger btn-sm me-2">Delete</button>
                </div>
            </div>
        </li>
    );
};

export default TodoItemComponent;
