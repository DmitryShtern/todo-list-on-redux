import React from "react"
import PropTypes from "prop-types"

const Todo = ({ onEdit, onToggle, onDelete, completed = false, text }) => (
  <li
    // onClick={onEdit}
    style={{
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#888" : "#000",
    }}
  >
    <input className="" type="checkbox" checked={completed} onChange={onToggle} />
    {" " + text + " "}
    <button className="" onClick={onDelete}>
      x
    </button>
  </li>
)

Todo.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
