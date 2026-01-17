import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  // Initialize todos state by loading from localStorage
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Persist todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  /**
   * Adds a new todo item to the list.
   * @param {string} title - The title of the new todo item.
   */
  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  /**
   * Toggles the completed state of a specific todo.
   * @param {string} id - The unique identifier of the todo item.
   * @param {boolean} completed - The new completed state.
   */
  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  /**
   * Deletes a todo item from the list.
   * @param {string} id - The unique identifier of the todo item.
   */
  function deleteTodo(id) {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    )
  }

  return (
    <>
      {/* Form for adding new todos */}
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>

      {/* Displays the list of todos and provides toggle and delete functionality */}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}
