import { CHANGE_HEADER_SIZE } from "./headerTypes"
const initialState = {
  padding: "1",
  small: false,
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEADER_SIZE:
      return {
        ...state,
        padding: action.payload,
        small: action.payload === "0" ? true : false,
      }
    default:
      return state
  }
}
export default headerReducer
