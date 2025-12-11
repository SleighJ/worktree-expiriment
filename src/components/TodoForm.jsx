import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
  const [input, setInput] = useState('')
  const { addTodo } = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="todo-submit-btn">
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm

