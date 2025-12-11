import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useTodo()

  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <p>No todos yet. Add one above!</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList

