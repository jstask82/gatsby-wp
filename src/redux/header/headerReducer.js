import { CHANGE_HEADER_SIZE } from "./headerTypes"
const initialState = {
  padding: "1",
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEADER_SIZE:
      return {
        ...state,
        padding: action.payload,
      }

    default:
      return state
  }
}
export default headerReducer
