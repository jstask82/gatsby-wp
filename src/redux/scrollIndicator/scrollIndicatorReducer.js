import { UPADATE_SCROLL_INDICATOR } from "./scrollIndicatorTypes"
const initialState = {
  size: 0,
}
const scrollIndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPADATE_SCROLL_INDICATOR:
      return {
        ...state,
        size: action.payload,
      }
    default:
      return state
  }
}
export default scrollIndicatorReducer
