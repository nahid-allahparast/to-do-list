import React from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className = 'container'>
      <div className="todolist">
        <header>
          <h3 className="header-text"><span>&nbsp;</span>Todo List</h3>
        </header>
        <Todo />
      </div>
    </div>
  );
};

export default App;
