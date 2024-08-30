import { useState } from "react";
import TodoFormComponent from "./components/todo/TodoFormComponent";
import TodoListComponent from "./components/todo/TodoListComponent";
import style from "./components/todo/TodoStyles.module.css";
const TASKS = [
  { id: 1, title: "Task One", dueDate: '12/12/2012', completed: true },
  { id: 2, title: "Task Two", dueDate: '12/12/2012', completed: true },
  { id: 3, title: "Task Three", dueDate: '12/12/2012', completed: true },
  { id: 4, title: "Task One", dueDate: '12/12/2012', completed: false },
  { id: 5, title: "Task Two", dueDate: '12/12/2012', completed: false },
  { id: 6, title: "Task Three", dueDate: '12/12/2012', completed: false },
]

const initTask = { id: 0, title: "", dueDate: "", completed: false };
function App() {
  let [list, setList] = useState(TASKS);
  const [obj, setObj] = useState(initTask);
  const getNextId = () => {
    let maxId = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > maxId) {
        maxId = list[i].id;
      }
    }
    return ++maxId;
  }
  const addTodo = () => {
    setList([...list.filter(task=>obj.id!==task.id), { ...obj, id: obj.id?obj.id:getNextId() }]);
    setObj(initTask);
  }
  const deleteTodo = (id) => {
    const modified = list.filter((todo) => todo.id !== id);
    setList(modified);
  }
  const completeTodo = (task) => {
    setList(list.map(todo =>
      todo.id === task.id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  }
  const editTodo = (task) => {
    setObj({
      ...task,
      dueDate: new Date(task.dueDate).toISOString().slice(0, 10)
    });
  }
  return (
    <div className={`container todo-container col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5 ${style.background}`}>
      <h1 className="text-center">To-Do Application</h1>
      <TodoFormComponent obj={obj} setObj={setObj} addTodo={addTodo} />
      <TodoListComponent title="Pending Tasks" tasks={list.filter((task) => !task.completed)} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} />
      <TodoListComponent title="Completed Tasks" tasks={list.filter((task) => task.completed)} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} />
    </div>
  );

}

export default App;
