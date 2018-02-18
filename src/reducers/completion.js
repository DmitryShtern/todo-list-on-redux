import { TOGGLE_ALL_TODOS } from "../constants/todos.js"

const completion = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ALL_TODOS:
      return !state
    default:
      return state
  }
}

export default completion
