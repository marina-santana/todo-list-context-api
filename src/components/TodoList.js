import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todos, removeTodo, checkTodo } = useContext(TodoContext);

  const handleDelete = (todoIndex) => {
    removeTodo(todoIndex);
  };

  const handleDone = (todoIndex) => {
    checkTodo(todoIndex);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li className="list-group-item" key={index}>
          <div className={todo.done ? "done" : "undone"}>
            <span className="icon" onClick={() => handleDone(index)}></span>
            {todo.title}
            <button
              type="button"
              className="close"
              onClick={() => handleDelete(index)}
            >
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
