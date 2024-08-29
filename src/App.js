import { useState } from "react";
import TodoFormComponent from "./components/todo/TodoFormComponent";
import TodoListComponent from "./components/todo/TodoListComponent";

const TASKS = [
  { id: 1, title: "Task One", dueDate: '12/12/2012', completed: true },
  { id: 2, title: "Task Two", dueDate: '12/12/2012', completed: true },
  { id: 3, title: "Task Three", dueDate: '12/12/2012', completed: true },
  { id: 1, title: "Task One", dueDate: '12/12/2012', completed: false },
  { id: 2, title: "Task Two", dueDate: '12/12/2012', completed: false },
  { id: 3, title: "Task Three", dueDate: '12/12/2012', completed: false },
]


// let currentID = 0;
// let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
// function getNextId() {
//   let maxId = 0;
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].id > maxId) {
//       maxId = todoList[i].id;
//     }
//   }

//   return ++maxId;
// }

// const saveTodoList = () => {
//   localStorage.setItem('todoList', JSON.stringify(todoList));
// };

// function addTodo(text, dueDate, completedOrNot) {
//   let newTodo = { id: getNextId(), title: text, todoDueDate: dueDate, completed: completedOrNot };
//   todoList.push(newTodo);
// }

// const handleEditTodo = (text, dueDate, completedOrNot) => {
//   todoList = todoList.map(todo => {
//     if (todo.id === currentID) {
//       todo.title = text;
//       todo.todoDueDate = dueDate;
//       todo.completed = completedOrNot;
//     }
//     return todo;
//   });
//   todoSubmitButton.innerText = "Add Task";
//   currentID = 0;
// };
// function deleteTodo(id) {
//   todoList = todoList.filter(todo => todo.id !== id);
//   renderTodoList();
//   saveTodoList();
// }

// function editTodo(id) {
//   let selectedTodo = todoList.find(todo => todo.id === id);
//   if (selectedTodo) {
//     currentID = selectedTodo.id;
//     todoInput.value = selectedTodo.title;
//     todoDate.value = selectedTodo.todoDueDate;
//     checkForComplete.checked = selectedTodo.completed;
//     todoSubmitButton.innerText = "Edit Todo";
//   }
// };
// function completeTodo(id) {
//   const todoExists = todoList.find(todo => todo.id === id);
//   if (todoExists) {
//     todoExists.completed = !todoExists.completed;
//     renderTodoList();
//     saveTodoList();
//   }
// }
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
    setList([...list, { ...obj, id: getNextId() }]);
    console.log(TASKS)
  }
  const deleteTodo = (id) => {
    const modified =list.filter((todo) => todo.id !== id);
    setList(modified);
    console.log("first")
  }
  return (
    <div className="container todo-container">
      <h1 className="text-center">To-Do Application</h1>
      <TodoFormComponent obj={obj} setObj={setObj} addTodo={addTodo} />
      <TodoListComponent title="Pending Tasks" tasks={list.filter((task) => !task.completed)} deleteTodo={deleteTodo} />
      <TodoListComponent title="Completed Tasks" tasks={list.filter((task) => task.completed)} deleteTodo={deleteTodo} />
    </div>
  );

}

export default App;
