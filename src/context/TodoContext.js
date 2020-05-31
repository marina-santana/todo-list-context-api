import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Estudar react", done: true },
    { id: 2, title: "Estudar webpack", done: false },
    { id: 3, title: "Estudar context", done: false },
    { id: 4, title: "learn redux", done: false },
  ]);

  const saveTodo = (todo) => {
    const newTodo = {
      id: todo.length + 1,
      title: todo.title,
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    todos.splice(todoIndex, 1);

    setTodos([...todos]);
  };

  const checkTodo = (todoIndex) => {
    const todo = todos[todoIndex];
    todos.splice(todoIndex, 1);
    todo.done = !todo.done;
    todo.done ? todos.push(todo) : todos.unshift(todo);

    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, checkTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
