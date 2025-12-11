import { useTodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

const TodoList = () => {
  const { todos } = useTodoContext()

  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyMessage}>
          Your todo list is empty. Add a task to get started!
        </p>
      </div>
    )
  }

  return (
    <section className={styles.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  )
}

export default TodoList

