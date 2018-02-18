import React from "react"
import PropTypes from "prop-types"

// const todoLabel = ({ onEdit, onDelete, text }) => {
//   let onSubmit = text.length === 0 ? onDelete : onEdit
//   let label = this.editing ? (
//     <input type="text" value={text} onSubmit={onEdit} />
//   ) : (
//     <label onClick={onEdit}>{" " + text + " "}</label>
//   )
// }

const Todo = ({ onToggle, onEdit, onDelete, completed = false, text }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#888" : "#000",
    }}
  >
    <input type="checkbox" checked={completed} onChange={onToggle} />
    {/* {todoLabel(onEdit, onDelete, text)} */}
    <label onClick={onEdit}>{" " + text + " "}</label>
    <button onClick={onDelete}>x</button>
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
