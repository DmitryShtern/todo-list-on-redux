import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  DELETE_TODO,
  DELETE_COMPLITED_TODOS,
  GET_ACTIVE_TODOS_COUNT,
} from "../constants/todos"

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo))
    case TOGGLE_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo),
      )
    case TOGGLE_ALL_TODOS:
      return state
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id
      })
    case DELETE_COMPLITED_TODOS:
      return state
    case GET_ACTIVE_TODOS_COUNT:
      return state.reduce((count, todo) => (todo.completed ? count : count + 1), 0)
    default:
      return state
  }
}

export default todos
