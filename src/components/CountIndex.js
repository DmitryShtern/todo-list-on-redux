import React from "react"
import PropTypes from "prop-types"

const CountIndex = ({ activeTodosCount }) => {
  const countLabel = activeTodosCount === 1 ? "item" : "items"

  return (
    <span>
      {activeTodosCount}
      {" " + countLabel + " left. "}
    </span>
  )
}

CountIndex.propTypes = {
  activeTodosCount: PropTypes.number.isRequired,
}

export default CountIndex
