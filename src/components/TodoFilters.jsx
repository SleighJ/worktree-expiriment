import { useTodoContext } from '../context/TodoContext'
import styles from './TodoFilters.module.css'

const TodoFilters = () => {
  const { filter, setFilter, stats } = useTodoContext()

  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ]

  return (
    <nav className={styles.filters} aria-label="Filter todos">
      {filters.map(f => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`${styles.filter} ${filter === f.key ? styles.active : ''}`}
          aria-pressed={filter === f.key}
        >
          {f.label} ({f.count})
        </button>
      ))}
    </nav>
  )
}

export default TodoFilters

