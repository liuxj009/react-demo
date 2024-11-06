import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from './reducers'

export const history = createBrowserHistory()
// const store = createStore(createRootReducer(history),applyMiddleware(routerMiddleware(history),thunk))
const store = createStore(createRootReducer(history),applyMiddleware(thunk))
console.log("rootStore:",store);
export default store

