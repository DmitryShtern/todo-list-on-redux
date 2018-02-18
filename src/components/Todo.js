import React from "react"
import PropTypes from "prop-types"

// const todoLabel = ({ onEdit, onDelete, text, editing }) => {
//   let onSubmit = text === undefined || text.length === 0 ? onDelete : onEdit
//   console.log("todoLabel: " + text)
//   let label = editing ? (
//     <input type="text" value={text} onBlur={onSubmit} />
//   ) : (
//     <label onDoubleClick={onEdit}>{" 1 " + text + " 2 "}</label>
//   )

//   return label
// }

const Todo = ({ onToggle, onEdit, onDelete, completed = false, text, editing }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#888" : "#000",
    }}
  >
    <input type="checkbox" checked={completed} onChange={onToggle} />
    {/* {todoLabel(
      (onEdit = { onEdit }),
      (onDelete = { onDelete }),
      (text = { text }),
      (editing = { editing }),
    )}  НЕ ПЕРЕДАЁТ ОБЪЕКТЫ */}
    <label onDoubleClick={onEdit}>{" " + text + " "}</label>
    <button onClick={onDelete}>x</button>
  </li>
)

Todo.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
}

export default Todo
