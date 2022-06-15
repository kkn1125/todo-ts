import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useContext";

function App() {
  const todos = useTodo();
  return (
    <div className='App'>
      <TodoApp>
        <TodoHeader title='My Todo' />
        <TodoList todoList={todos} />
      </TodoApp>
    </div>
  );
}

export default App;
