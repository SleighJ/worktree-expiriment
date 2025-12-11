import { TodoProvider } from '../context/TodoContext'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import '../App.css'

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <header className="todo-header">
          <h1>Todo App</h1>
        </header>
        <main className="todo-main">
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  )
}

export default TodoApp

