
const TodoFormComponent = (props) => {
  const {obj, setObj, addTodo} = props
  const handleForm=(e)=>{
    e.preventDefault();
    addTodo();
  }
  const handleChange = (key,value) =>{
    if(key==="todo-name"){
      setObj({...obj, title: value});
      console.log(obj);
    }else{
      setObj({...obj, dueDate: value});
      console.log(obj);
    }
  }
  return (
    <form id="todo-form" onSubmit={handleForm}>
        <div>
            <label htmlFor="todo-name">Add a new task</label>
            <input required onChange={(e)=>handleChange("todo-name",e.target.value)}  className="form-control" type="text" name="todo-name" id="todo-name"
                placeholder="Enter To-Do Text" />
        </div>
        <div>
            <label htmlFor="todo-due-date">Due Date</label>
            <input required onChange={(e)=>handleChange("todo-due-date",e.target.value)} className="form-control" type="date" name="todo-due-date" id="todo-due-date"/>
        </div>
      
      <div className="d-grid my-4">
        <button id="savaTodo" className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoFormComponent;
