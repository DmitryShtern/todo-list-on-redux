import { connect } from "react-redux"
import CountIndex from "../components/CountIndex"

const getActiveTodosCount = todos => {
  return todos.filter(t => !t.completed).length
}

const mapStateToProps = state => {
  return {
    activeTodosCount: getActiveTodosCount(state.todos),
  }
}

const TodosCount = connect(mapStateToProps)(CountIndex)

export default TodosCount
