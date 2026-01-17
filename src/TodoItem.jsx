/**
 * TodoItem Component
 * 
 * Represents a single todo item in the list.
 * Displays the todo title, allows the user to
 * toggle completion using a checkbox, and
 * remove the item using the delete button.
 */
export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  )
}
