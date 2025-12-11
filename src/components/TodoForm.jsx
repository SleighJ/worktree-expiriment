import { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'
import styles from './TodoForm.module.css'

const TodoForm = () => {
  const [input, setInput] = useState('')
  const { addTodo } = useTodoContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className={styles.input}
        autoFocus
      />
      <button 
        type="submit" 
        className={styles.button}
        disabled={!input.trim()}
      >
        Create
      </button>
    </form>
  )
}

export default TodoForm

