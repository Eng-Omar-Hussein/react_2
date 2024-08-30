import Styles from "./TodoStyles.module.css";

const TodoItemComponent = (props) => {
    
    const handelDelete=(e)=>{
        props.deleteTodo(parseInt(e.parentElement.parentElement.querySelector("span").innerText.split(".")[0]));
    }
    const handelCompleted=(e)=>{
        props.completeTodo(props.task);
    }
    return (
        <li className={`list-group-item ${props.task.completed ? Styles.completed : ""}`} >
            <div>
                <span>
                    {props.task.id}. {props.task.title} - {props.task.dueDate}
                </span>
                <div>
                    <button onClick={(e)=>handelCompleted(e.target)} className="btn btn-success btn-sm me-2">
                        {props.task.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                        disabled={props.task.completed ? true : false}
                        className="btn btn-warning btn-sm me-2"
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
