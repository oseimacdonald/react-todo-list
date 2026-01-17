import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  // Track the current value of the input field
  const [newItem, setNewItem] = useState("")

  /**
   * Handles the form submission event.
   * Prevents empty todos from being added and
   * passes the new todo title back to the parent component.
   */
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() === "") return

    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="New-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>

        {/* Input field for entering a new todo */}
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      {/* Button to submit the new todo */}
      <button className="btn">Add</button>
    </form>
  )
}
