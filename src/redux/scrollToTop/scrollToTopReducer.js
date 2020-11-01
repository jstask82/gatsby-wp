import { CHANGE_BACK_TO_TOP_VISIBILITY } from "./scrollToTopTypes"
const initialState = {
  visible: false,
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACK_TO_TOP_VISIBILITY:
      return {
        ...state,
        visible: action.payload,
      }
    default:
      return state
  }
}
export default headerReducer
