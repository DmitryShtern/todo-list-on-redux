import React from "react"
import { connect } from "react-redux"
import { addTodo, toggleAllTodos } from "../actions"

let AddTodo = ({ addTodo, toggleAllTodos }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ""
        }}
      >
        <input type="checkbox" onChange={toggleAllTodos} />

        <input
          ref={node => {
            input = node
          }}
          placeholder="What needs to be done?"
        />

        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text))
    },

    toggleAllTodos: () => {
      dispatch(toggleAllTodos())
    },
  }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
// AddTodo = connect()(AddTodo)

export default AddTodo
