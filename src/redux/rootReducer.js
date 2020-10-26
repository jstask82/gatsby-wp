import { combineReducers } from "redux"
import headerReducer from "./header/headerReducer"
import navMenuReducer from "./navMenu/navMenuReducer"

const rootReducer = combineReducers({
  header: headerReducer,
  navMenu: navMenuReducer,
})

export default rootReducer
