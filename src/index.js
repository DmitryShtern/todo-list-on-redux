import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
// import { createStore } from "redux"
import configureStore from "./store/configureStore"
// import rootReducer from "./reducers"
import App from "./components/App"

// let store = createStore(rootReducer)
const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
