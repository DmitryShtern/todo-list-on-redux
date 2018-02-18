import React from "react"
import { connect } from "react-redux"
import { addTodo, getCompletion, toggleAllTodos } from "../actions"

// const getCompletion = todos => {
//   return !todos.some(todo => {
//     return todo.completed === false
//   })
// }

let AddTodo = ({ addTodo, completion, toggleAllTodos }) => {
  // let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          // addTodo(input.value)
          addTodo(input.value)
          input.value = ""
        }}
      >
        <input type="checkbox" checked={completion} onChange={toggleAllTodos} />
        {/* {console.log(todosCompletion)} */}

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
  return {
    todos: state.todos,
    completion: getCompletion(),
    // todosCompletion: getCompletion(state.todos),
    // activeTodosCount: getTodosCount(state.todos),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text))
    },

    getCompletion: () => {
      dispatch(getCompletion())
    },

    toggleAllTodos: () => {
      dispatch(toggleAllTodos())
    },
  }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
// AddTodo = connect()(AddTodo)

export default AddTodo
