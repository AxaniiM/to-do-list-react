import { useState } from "react";

export function AddTask({onAdd}) {
    const [newTask, setNewTask] = useState('');
  
    function handleTaskInputChange(event) {
      setNewTask(event.target.value);
    }
  
    function handleTaskFormSubmit(event) {
      event.preventDefault();
      onAdd(newTask);
      setNewTask('');
        
    }
    return (
      <form onSubmit={handleTaskFormSubmit}>
        <input type='text' placeholder="Add new task here" value={newTask} onChange={handleTaskInputChange} />
        <button type='submit'>Add</button>
      </form>
    );
  }
  