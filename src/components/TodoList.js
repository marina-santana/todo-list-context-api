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
    <>
      {todos.map((todo, index) => (
        <li className="list-group-item">
          <div className={todo.done ? "done" : "undone"}>
            <span
              className="glyphicon glyphicon-ok icon"
              onClick={handleDone}
            ></span>
            {todo.title}
            <button type="button" className="close" onClick={handleDelete}>
              &times;
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default TodoList;
