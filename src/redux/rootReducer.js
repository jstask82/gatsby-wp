import { combineReducers } from "redux"
import headerReducer from "./header/headerReducer"
import navMenuReducer from "./navMenu/navMenuReducer"
import scrollIndicatorReducer from "./scrollIndicator/scrollIndicatorReducer"

const rootReducer = combineReducers({
  header: headerReducer,
  navMenu: navMenuReducer,
  scrollIndicator: scrollIndicatorReducer,
})

export default rootReducer
