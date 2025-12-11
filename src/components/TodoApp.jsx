import { TodoProvider } from '../context/TodoContext'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'
import styles from './TodoApp.module.css'

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <div className={styles.content}>
          <h1 className={styles.title}>Todo Manager</h1>
          <TodoForm />
          <TodoFilters />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default TodoApp

