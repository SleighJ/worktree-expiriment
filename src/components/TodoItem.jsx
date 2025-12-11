import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const { toggleTodo, updateTodo, deleteTodo } = useTodo()

  const handleEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim())
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditText(todo.text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="todo-edit-input"
          autoFocus
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={handleEdit}
        >
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              onClick={handleEdit}
              className="todo-edit-btn"
              aria-label="Edit todo"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="todo-delete-btn"
              aria-label="Delete todo"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TodoItem

