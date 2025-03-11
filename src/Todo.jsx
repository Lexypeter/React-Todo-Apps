import React, { useState } from "react";
import TodoItems from "./TodoItems";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer"


const Todo = () => {
 
  const [todos, setTodos] = useState([]);
  const count = todos.filter((todo)=> todo.done).length
  const countTodos = todos.length


 

  return (
    <div>
      <Form todos={todos} setTodos ={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
       <Footer count = {count} countTodos = {countTodos}/>
      
    </div>
  );
};

export default Todo;
