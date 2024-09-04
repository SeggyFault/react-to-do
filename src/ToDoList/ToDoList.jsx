import { useState } from "react";

function ToDoList() {

  return(
    <div>
      <h1>To Do List</h1>
      <div>
        <input type="text" placeholder="Write a task..."/>
        <button>Add</button>
      </div>
      <ol>
        <li>
          <span>Task 1</span>
          <button>Delete</button>
          <button>Move up</button>
          <button>Move down</button>
        </li>
      </ol>
    </div>
  )
}

export default ToDoList;