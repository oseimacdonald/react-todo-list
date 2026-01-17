import { TodoItem } from "./TodoItem"

/**
 * TodoList Component
 * 
 * Displays the list of todos and passes down the
 * toggle and delete handlers to each TodoItem.
 * If there are no todos, it shows a placeholder message.
 */
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="List">
      {todos.length === 0 && <li>No Todos</li>}

      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
