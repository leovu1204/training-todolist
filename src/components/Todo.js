import React from "react";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  
  return (
    <div className="todo">
      <p onClick={() => toggleComplete(task.id) } className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div className="click" >
        <i class="fa-solid fa-pen-to-square" onClick={() => editTodo(task.id)}></i>
        <i class="fa-solid fa-trash-can" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  );
};
