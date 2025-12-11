import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import '../App.css'

export default function TodoApp() {
  return (
    <TodoProvider>
      <div className="container">
        <div className="card">
          <h1 className="title">My Todo List</h1>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

