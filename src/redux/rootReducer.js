import { combineReducers } from "redux"
import headerReducer from "./header/headerReducer"
import navMenuReducer from "./navMenu/navMenuReducer"
import scrollIndicatorReducer from "./scrollIndicator/scrollIndicatorReducer"
import scrollToTopReducer from "./scrollToTop/scrollToTopReducer"

const rootReducer = combineReducers({
  header: headerReducer,
  navMenu: navMenuReducer,
  scrollIndicator: scrollIndicatorReducer,
  scrollToTop: scrollToTopReducer,
})

export default rootReducer
