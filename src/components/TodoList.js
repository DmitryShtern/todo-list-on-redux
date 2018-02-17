import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

let ulStyle = {
  padding: "0 10px",
  listStyleType: "none",
}

const TodoList = ({ todos, editTodo, toggleTodo, deleteTodo }) => (
  <ul style={ulStyle}>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onEdit={() => editTodo(todo.id)}
        onToggle={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList
