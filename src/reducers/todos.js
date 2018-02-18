import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  DELETE_TODO,
  DELETE_COMPLITED_TODOS,
  // GET_ACTIVE_TODOS_COUNT,
  // GET_COMPLETION,
} from "../constants/todos"

const initialState = [
  {
    id: 1,
    text: "New task",
    completed: false,
  },
  {
    id: 0,
    text: "Old complited task",
    completed: true,
  },
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state,
      ]

    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo))

    case TOGGLE_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo),
      )

    case TOGGLE_ALL_TODOS:
      console.log("/reducers/todos.js TOGGLE_ALL_TODOS")
      return state.map(
        todo =>
          todo.completed !== state.completion ? { ...todo, completed: state.completion } : todo,
      )

    // case GET_COMPLETION:
    //   return !state.todos.some(todo => {
    //     return todo.completed === false
    //   })

    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id
      })

    case DELETE_COMPLITED_TODOS:
      return state

    default:
      return state
  }
}

export default todos
