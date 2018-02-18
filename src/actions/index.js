import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  GET_COMPLETION,
  DELETE_TODO,
  DELETE_COMPLITED_TODOS,
} from "../constants/todos"
import { SET_VISIBILITY_FILTER } from "../constants/visibilityFilter"

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  }
}

export const editTodo = (id, text, editing) => {
  return {
    type: EDIT_TODO,
    id,
    text,
    editing,
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const getCompletion = () => {
  return {
    type: GET_COMPLETION,
  }
}

export const toggleAllTodos = () => {
  return {
    type: TOGGLE_ALL_TODOS,
  }
}

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

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
