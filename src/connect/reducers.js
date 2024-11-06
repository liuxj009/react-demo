import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import homeReducer from "../pages/homePage/reducer/index";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    homeReducer
  })
  export default createRootReducer