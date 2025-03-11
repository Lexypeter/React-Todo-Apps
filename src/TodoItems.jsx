import React, { useState } from 'react'
import styles from "./TodoItem.module.css"

const TodoItems = ({item, todos, setTodos}) => {
  const [count,setCounts]= useState() 
   const handleDelete = ()=>{
    console.log(item)
  setTodos(todos.filter((todo)=> todo !== item))
  }
  const handleclick = (item)=>{
   let array = todos.map((todo)=> todo.name == item? {...todo,done: !todo.done} : todo )
    setTodos(array)
    console.log(todos)
  }
  const className = item.done  ? styles.className : ""
  return (
    <div className={styles.item}>
      <div key={Math.random()} className={styles.itemName}> <span onClick={()=>handleclick(item.name)} className={className}>   {item.name} </span>
    <span>
      <button className={styles.delete} onClick={()=>handleDelete(item)}>X</button>
    </span>
    </div>
    
    <hr className={styles.line}/>
    </div>
  ) 
}

export default TodoItems