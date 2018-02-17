import { connect } from "react-redux"
import { getActiveTodosCount, deleteComplitedTodos } from "../actions"
import CountIndex from "../components/CountIndex"

const getTodosCount = todos => {
  return todos.filter(t => !t.completed).length
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeTodosCount: getTodosCount(state.todos),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActiveTodosCount: () => {
      dispatch(getActiveTodosCount())
    },

    deleteComplitedTodos: () => {
      dispatch(deleteComplitedTodos())
    },
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteComplitedTodos: () => {
//       ////
//       dispatch(deleteComplitedTodos())
//     },
//   }
// }

const TodosCount = connect(mapStateToProps, mapDispatchToProps)(CountIndex)

export default TodosCount
