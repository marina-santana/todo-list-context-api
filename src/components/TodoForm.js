import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { saveTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    saveTodo(todo);
  };

  const handleInputChange = (event) => {
    setTodo({
      ...todo,
      title: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Nova tarefa"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-default" />
      </div>
    </form>
  );
};

export default TodoForm;
