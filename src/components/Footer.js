import React from "react"
import ClearLink from "../containers/ClearLink"
import FilterLink from "../containers/FilterLink"
import TodosCount from "../containers/TodosCount"

import { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } from "../constants/visibilityFilter"

const style = {
  margin: "50px",
}

const Footer = () => (
  <p>
    <span>
      <TodosCount />
    </span>
    <span style={style}>
      Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
      {", "}
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      {", "}
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </span>
    <span>
      <ClearLink />
    </span>
  </p>
)

export default Footer
