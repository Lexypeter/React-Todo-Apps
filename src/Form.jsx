import React from 'react'
import styles from  "./Form.module.css"
import { useState } from 'react';

const Form = ({todos,setTodos,}) => {
   const [todo, setTodo] = useState({name:"", done:false});
   const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form from reloading the page
      if (todo.name.trim()) {
        setTodos([...todos, todo]);
        setTodo({name:"", done:false}); // Clear input after adding
      }
    };
  return (
    <form onSubmit={handleSubmit} className={styles.forms}>
      <div className={styles.container}>
      <input className={styles.input}
      type="text"
      value={todo.name}
      placeholder='Enter Todo item'
      onChange={(e) => setTodo({name:e.target.value,done: false})}
    />
    <button type="submit" className={styles.button}>Add</button>

      </div>
   
  </form>
  )
}

export default Form