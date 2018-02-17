import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_COMPLITED_TODOS,
  GET_ACTIVE_TODOS_COUNT,
} from "../constants/todos"
import { SET_VISIBILITY_FILTER } from "../constants/visibilityFilter"

let nextTodoId = 0

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  }
}

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text,
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

// export const toggleAllTodos = id => {
//   return {
//     type: TOGGLE_TODO,
//   }
// }

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  }
}

export const deleteComplitedTodos = () => {
  return {
    type: DELETE_COMPLITED_TODOS,
  }
}

export const getActiveTodosCount = () => {
  return {
    type: GET_ACTIVE_TODOS_COUNT,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
