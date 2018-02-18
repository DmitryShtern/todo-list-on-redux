import React from "react"
import { connect } from "react-redux"
import { deleteComplitedTodos } from "../actions"

const getActiveTodosCount = todos => {
  return todos.filter(t => t.completed).length
}

let ClearLink = ({ activeTodosCount, deleteComplitedTodos }) => {
  let clearLabel

  if (activeTodosCount) {
    clearLabel = "Clear complited"
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        deleteComplitedTodos()
      }}
    >
      {clearLabel}
    </a>
  )
}

const mapStateToProps = state => {
  return {
    activeTodosCount: getActiveTodosCount(state.todos),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComplitedTodos: () => {
      dispatch(deleteComplitedTodos())
    },
  }
}

ClearLink = connect(mapStateToProps, mapDispatchToProps)(ClearLink)

export default ClearLink
