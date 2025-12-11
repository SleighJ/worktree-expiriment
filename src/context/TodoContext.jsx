import { createContext, useContext, useState, useMemo } from 'react'

const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  const addTodo = (text) => {
    if (!text || !text.trim()) return
    
    const newTodo = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: text.trim(),
      done: false
    }
    
    setTodos(prev => [newTodo, ...prev])
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    )
  }

  const modifyTodo = (id, newContent) => {
    if (!newContent || !newContent.trim()) return
    
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, content: newContent.trim() } : t
      )
    )
  }

  const visibleTodos = useMemo(() => {
    switch (currentFilter) {
      case 'active':
        return todos.filter(t => !t.done)
      case 'completed':
        return todos.filter(t => t.done)
      default:
        return todos
    }
  }, [todos, currentFilter])

  const stats = useMemo(() => ({
    total: todos.length,
    active: todos.filter(t => !t.done).length,
    completed: todos.filter(t => t.done).length
  }), [todos])

  const value = {
    todos: visibleTodos,
    allTodos: todos,
    filter: currentFilter,
    setFilter: setCurrentFilter,
    addTodo,
    removeTodo,
    toggleTodo,
    modifyTodo,
    stats
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within TodoProvider')
  }
  return context
}

