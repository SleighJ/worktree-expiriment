import React from 'react'
import { useTodos } from '../context/TodoContext'

export default function TodoFilter() {
  const { filterType, setFilterType, allTodos } = useTodos()

  const counts = {
    all: allTodos.length,
    active: allTodos.filter(t => !t.isCompleted).length,
    completed: allTodos.filter(t => t.isCompleted).length
  }

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ]

  return (
    <div className="filter-group">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => setFilterType(filter.key)}
          className={`filter-btn ${filterType === filter.key ? 'filter-btn-active' : ''}`}
        >
          {filter.label} ({counts[filter.key]})
        </button>
      ))}
    </div>
  )
}

