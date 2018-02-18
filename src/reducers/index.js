import { combineReducers } from "redux"
import completion from "./completion"
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"

const rootReducer = combineReducers({
  completion,
  todos,
  visibilityFilter,
})

export default rootReducer
