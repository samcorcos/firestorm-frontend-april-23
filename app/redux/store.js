import { createStore, compose, applyMiddleware } from 'redux'
import reducers from 'redux/reducers'
import thunk from 'redux-thunk'

const createStoreWrapper = compose(
  applyMiddleware(thunk)
)(createStore)

const store = createStoreWrapper(reducers)

export default store
