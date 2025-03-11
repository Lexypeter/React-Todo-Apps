import React from 'react'
import styles from "./Footer.module.css"

const Footer = ({count, countTodos}) => {
  return (
    <div className={styles.footer}>
      <span className= {styles.item}>Completed Todos: {count}</span>
      <span className= {styles.item}>Total Todos: {countTodos}</span>
    </div>
  )
}

export default Footer