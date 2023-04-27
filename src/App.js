import './App.css';
import { useState } from 'react';
import { AddTask } from './components/Add-Task';
import {itemsList} from "./listArray";
import { Task } from './components/TaskElement';





function ToDoList() {
  const [todos,setTodos] = useState([...itemsList]);
  

  const handleAddTask = (newTask) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newId = lastId + 1;
    const newTaskObj = { id: newId, item: newTask };

    if (newTask === "") {
      alert("can't add an empty task!")
      return todos;
  } else setTodos([newTaskObj,
    ...todos ]);

  };
  
    function handleDeleteTask(todoId) {
      const updatedTodos = todos.filter((item) => item.id !== todoId);
      setTodos(updatedTodos);
    }

    const handleEdit = (todoId) => {
      setTodos(
        todos.map((t) => (t.id === todoId ? { ...t, editing: true } : t))
      );
    };
  
    const handleSave = (editedTodo) => {
      setTodos(
        todos.map((t) =>
          t.id === editedTodo.id ? { ...editedTodo, editing: false } : t
        )
      );
    };
    const handleCancel = () => {
      setTodos(todos.map((t) => ({ ...t, editing: false })));
    };
   
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
    <h1 className="font-bold mb-5 text-5xl">To Do List:</h1>
      <AddTask onAdd={handleAddTask}/>
        <ul className='flex flex-col'>
          {todos.map(task =>
       
            <Task
            key={task.id}
            item={task} 
            onDelete = {()=> handleDeleteTask(task.id)}
            onSave = { handleSave}
            onEdit = {handleEdit}
            onCancel = {handleCancel} />
 
          )}
        </ul>
    </div>
          )
}

export default ToDoList;

