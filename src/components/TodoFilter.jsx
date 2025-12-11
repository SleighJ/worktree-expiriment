import { useTodo } from '../context/TodoContext'

const TodoFilter = () => {
  const { filter, setFilter, allTodos } = useTodo()

  const activeCount = allTodos.filter(t => !t.completed).length
  const completedCount = allTodos.filter(t => t.completed).length

  return (
    <div className="todo-filter">
      <button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All ({allTodos.length})
      </button>
      <button
        onClick={() => setFilter('active')}
        className={filter === 'active' ? 'active' : ''}
      >
        Active ({activeCount})
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed ({completedCount})
      </button>
    </div>
  )
}

export default TodoFilter

