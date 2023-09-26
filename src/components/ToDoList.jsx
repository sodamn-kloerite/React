import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
    
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo,...todos]
    setTodos(newTodos)
    console.log(todo,...todos);
  };

  const updateTodo = (todoId,newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev =>prev.map(item =>(item.id === todoId ? newValue : item)));
  };

const removeTodo = id => {const removeArr = [...todos].filter(todo=>todo.id!== id)
setTodos(removeArr)
}



const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id)
    {todo.isComplete = ! todo.isComplete}
    return todo
  })
  setTodos(updatedTodos);
};

  return (
    <div>
      <h1>whats the plan for today bhaiyya jee</h1>
      <ToDoForm onSubmit={addTodo}></ToDoForm>
      <ToDo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}></ToDo>
    </div>
  );
}

export default ToDoList;
