import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo)
    setTodo("")
  }
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Write your next task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="todo-btn">
          ADD
        </button>
      </form>
    </div>
  );
};
