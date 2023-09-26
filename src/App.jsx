import React from "react";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./App.css"
function App() {
  return (
    <>
      <div className="todo-app">
      <ToDoList></ToDoList>
      </div>
      
    </>
  );
}

export default App;
