import React from "react"
import Footer from "./Footer"
import { AddTodo, VisibleTodoList } from "../containers"

const divStyle = {
  width: "700px",
  backgroundColor: "#fafafa",
}

const App = () => (
  <div style={divStyle}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
