import React, { useState, useEffect, useRef } from 'react'
import { useTodos } from '../context/TodoContext'

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef(null)
  const { toggleComplete, editTodo, removeTodo } = useTodos()

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleSave = () => {
    if (editValue.trim()) {
      editTodo(todo.id, editValue)
      setIsEditing(false)
    } else {
      setEditValue(todo.text)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditValue(todo.text)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div className={`item ${todo.isCompleted ? 'item-completed' : ''}`}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo.id)}
          className="checkbox"
        />
        <span className="checkmark"></span>
      </label>

      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="edit-input"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <span
          className={`text ${todo.isCompleted ? 'text-strikethrough' : ''}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <div className="actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="action-btn edit-btn"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="action-btn delete-btn"
              title="Delete task"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

