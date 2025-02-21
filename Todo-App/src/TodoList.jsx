import React from 'react'
import TodoItems from './TodoItems'
import styles from "./TodoList.module.css"

const TodoList = ({todos, setTodos}) => {
  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done) - Number(b.done))
  return (
    <div className={styles.list}>{sortedTodos.map((item) => (
      <TodoItems item = {item} key={Math.random()} todos={todos} setTodos = {setTodos}/>
     ))}</div>
  )
}

export default TodoList