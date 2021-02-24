import React from "react";
import TodoProvider from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="todoForm">
        <h3 className="title">Lista de tarefas</h3>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
