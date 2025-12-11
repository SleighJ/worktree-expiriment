import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext(undefined)

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [filterType, setFilterType] = useState('all')

  const createTodo = (text) => {
    const todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      isCompleted: false,
      timestamp: Date.now()
    }
    setTodos(prev => [...prev, todo])
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    )
  }

  const editTodo = (id, newText) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, text: newText.trim() } : t
      )
    )
  }

  const getFilteredTodos = () => {
    switch (filterType) {
      case 'active':
        return todos.filter(t => !t.isCompleted)
      case 'completed':
        return todos.filter(t => t.isCompleted)
      default:
        return todos
    }
  }

  const contextValue = {
    todos: getFilteredTodos(),
    allTodos: todos,
    filterType,
    setFilterType,
    createTodo,
    removeTodo,
    toggleComplete,
    editTodo
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodos must be used within TodoProvider')
  }
  return context
}

