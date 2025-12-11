import { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo }) => {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.content)
  const { toggleTodo, modifyTodo, removeTodo } = useTodoContext()

  const startEdit = () => {
    setEditing(true)
    setEditValue(todo.content)
  }

  const saveEdit = () => {
    if (editValue.trim()) {
      modifyTodo(todo.id, editValue)
    } else {
      setEditValue(todo.content)
    }
    setEditing(false)
  }

  const cancelEdit = () => {
    setEditValue(todo.content)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      saveEdit()
    } else if (e.key === 'Escape') {
      cancelEdit()
    }
  }

  return (
    <article className={`${styles.item} ${todo.done ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        className={styles.checkbox}
        aria-label={`Mark "${todo.content}" as ${todo.done ? 'incomplete' : 'complete'}`}
      />
      
      {editing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          className={styles.editInput}
          autoFocus
        />
      ) : (
        <span
          className={styles.content}
          onDoubleClick={startEdit}
        >
          {todo.content}
        </span>
      )}

      <div className={styles.controls}>
        {!editing && (
          <>
            <button
              onClick={startEdit}
              className={styles.editButton}
              aria-label="Edit todo"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className={styles.deleteButton}
              aria-label="Delete todo"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </article>
  )
}

export default TodoItem

