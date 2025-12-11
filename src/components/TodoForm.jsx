import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext'

export default function TodoForm() {
  const [value, setValue] = useState('')
  const { createTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      createTodo(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <input
          type="text"
          className="input"
          placeholder="Enter a new task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="button button-primary">
          Add
        </button>
      </div>
    </form>
  )
}

