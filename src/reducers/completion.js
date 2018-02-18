// import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../constants/visibilityFilter.js"
import { GET_COMPLETION, TOGGLE_ALL_TODOS } from "../constants/todos.js"

const completion = (state = false, action) => {
  switch (action.type) {
    case GET_COMPLETION:
      console.log("/reducers/completion.js GET_COMPLETION")
      return action.completion

    case TOGGLE_ALL_TODOS:
      console.log("/reducers/completion.js TOGGLE_ALL_TODOS")
      return !state
    default:
      return state
  }
}

export default completion
