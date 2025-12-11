import React from 'react'
import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodos()

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-text">No tasks found. Start by adding one above!</p>
      </div>
    )
  }

  return (
    <div className="list-container">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

