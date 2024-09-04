import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ToDoList() {

  const [tasks, setTasks] = useState(["Do the homework"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  return(
    <div className="flex flex-col items-start justify-start w-1/4 h-screen gap-6 m-auto mt-40">
      <h1 className="text-5xl">To Do List</h1>
      <div className="flex gap-1">
        <input className="pl-2 border border-gray-300 rounded-md w-96" type="text" placeholder="Write a task..." value={newTask} onChange={handleInputChange}/>
        <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => <li key={index} className="flex items-center justify-between p-2 mb-2 rounded-md bg-slate-200">
          <span className="mr-4 text-lg">{task}</span>
          <div className="flex gap-1">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"><FaArrowUp /></button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"><FaArrowDown /></button>
            <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"><MdDelete /></button>  
          </div>    
        </li>)}
      </ol>
    </div>
  )
}

export default ToDoList;