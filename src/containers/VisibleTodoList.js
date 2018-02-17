import { connect } from "react-redux"
import { editTodo, toggleTodo, deleteTodo } from "../actions"
import TodoList from "../components/TodoList"

import { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } from "../constants/visibilityFilter"

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: id => {
      dispatch(editTodo(id))
    },

    toggleTodo: id => {
      dispatch(toggleTodo(id))
    },

    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
