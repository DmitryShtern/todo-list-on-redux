import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  DELETE_TODO,
  DELETE_COMPLITED_TODOS,
} from "../constants/todos"

const initialState = [
  {
    id: 1,
    text: "New task",
    completed: false,
    editing: false,
  },
  {
    id: 0,
    text: "Old complited task",
    completed: true,
    editing: false,
  },
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          completed: false,
        },
        ...state,
      ]

    case EDIT_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, text: action.text, editing: !todo.editing } : todo,
      )

    case TOGGLE_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo),
      )

    case TOGGLE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }))

    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id
      })

    case DELETE_COMPLITED_TODOS:
      return state.filter(todo => {
        return todo.completed !== true
      })

    default:
      return state
  }
}

export default todos
