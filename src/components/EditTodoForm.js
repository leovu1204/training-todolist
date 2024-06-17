import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo, task.id);
    setTodo("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Update task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="todo-btn">
          Update task
        </button>
      </form>
    </div>
  );
};
