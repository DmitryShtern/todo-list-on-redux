import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const getActiveTodosCount = todos => {
  return todos.filter(t => !t.completed).length
}

let TodosCount = ({ activeTodosCount }) => {
  const countLabel = activeTodosCount === 1 ? "item" : "items"

  return (
    <span>
      {activeTodosCount}
      {" " + countLabel + " left. "}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    activeTodosCount: getActiveTodosCount(state.todos),
  }
}

TodosCount.propTypes = {
  activeTodosCount: PropTypes.number.isRequired,
}

TodosCount = connect(mapStateToProps)(TodosCount)

export default TodosCount
