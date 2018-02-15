import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "../reducers"

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(rootReducer, initialState, applyMiddleware(logger))

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      const nextRootReducer = require(rootReducer)
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}