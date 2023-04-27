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
      <form onSubmit={handleTaskFormSubmit} className="mb-10">
        <input type='text' placeholder="Add new task" value={newTask} onChange={handleTaskInputChange} className="border-2 rounded-2xl w-[750px] shadow-md h-10 p-2 text-xl"/>
        <button type='submit' className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700
                                         text-white font-medium px-1 py-[0.8px] rounded mb-2 ml-2">Add</button>
      </form>
    );
  }
  